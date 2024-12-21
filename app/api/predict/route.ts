import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file type (accept only images)
    const validImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validImageTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Only images are allowed.' }, { status: 400 });
    }

    // Convert the file to a base64 string
    const buffer = await file.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString('base64');

    // Set up the Google Vision API request
    const apiKey = process.env.GOOGLE_VISION_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Google Vision API key is not configured' }, { status: 500 });
    }

    const visionRequestBody = {
      requests: [
        {
          image: {
            content: base64Image,
          },
          features: [
            {
              type: 'LABEL_DETECTION',
              maxResults: 5,
            },
          ],
        },
      ],
    };

    // Make the request to the Google Vision API
    const response = await fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(visionRequestBody),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.error.message }, { status: response.status });
    }

    const data = await response.json();
    const predictions = data.responses[0]?.labelAnnotations || [];

    return NextResponse.json({ predictions }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
