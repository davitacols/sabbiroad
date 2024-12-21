import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const BASE_GOOGLE_MAPS_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';

interface Coordinates {
    lat: number;
    lng: number;
}

interface Building {
    name: string;
    location: string;
    yearConstructed: number | null; // Allow null for data from Google Maps
    height: string | null;
    architect: string | null;
    description: string | null;
    address?: string;
    coordinates: Coordinates;
}

const buildingsDatabase: Building[] = [
  {
    name: "Empire State Building",
    location: "New York City, NY",
    yearConstructed: 1931,
    height: "1,454 ft (443.2 m)",
    architect: "Shreve, Lamb & Harmon",
    description: "An iconic 102-story Art Deco skyscraper in Midtown Manhattan.",
    address: "350 Fifth Avenue, New York, NY 10118",
    coordinates: {
      lat: 40.7484,
      lng: -73.9857
    }
  },
  {
    name: "Burj Khalifa",
    location: "Dubai, United Arab Emirates",
    yearConstructed: 2010,
    height: "2,717 ft (828 m)",
    architect: "Adrian Smith",
    description: "The world's tallest building and a global icon.",
    address: "1 Sheikh Mohammed bin Rashid Blvd, Dubai, UAE",
    coordinates: {
      lat: 25.1972,
      lng: 55.2744
    }
  }
];

async function searchGoogleMaps(search: string): Promise<Building | null> {
    if (!GOOGLE_MAPS_API_KEY) {
        return null; // Don't search if API key is missing
    }

    try {
        const url = `${BASE_GOOGLE_MAPS_URL}address=${encodeURIComponent(search)}&key=${GOOGLE_MAPS_API_KEY}`;
        console.log("Fetching from Google Maps:", url);
        const response = await fetch(url);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Google Maps API Error: ${response.status} - ${errorText}`);
            return null;
        }

        const data = await response.json();

        if (data.status === 'OK' && data.results && data.results.length > 0) {
            const result = data.results[0];
            return {
                name: result.formatted_address,
                location: result.formatted_address,
                yearConstructed: null,
                height: null,
                architect: null,
                description: null,
                address: result.formatted_address,
                coordinates: result.geometry.location,
            };
        } else {
            console.error("Google Maps API returned no results or non-OK status:", data.status);
            return null;
        }
    } catch (error) {
        console.error("Error during Google Maps API call:", error);
        return null;
    }
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search');

    if (!search) {
        return NextResponse.json({ error: 'Search term is required' }, { status: 400 });
    }

    const trimmedSearch = search.toLowerCase().trim();

    // 1. Search in the database
    let building = buildingsDatabase.find(b => {
        const nameMatch = b.name.toLowerCase().trim().includes(trimmedSearch);
        const addressMatch = b.address?.toLowerCase().trim().includes(trimmedSearch) || false;
        return nameMatch || addressMatch;
    });

    // 2. If not found in database, search Google Maps
    if (!building) {
        building = await searchGoogleMaps(search);
        if(!building) return NextResponse.json({ error: 'Building not found' }, { status: 404 });
    }
    else if (!building.address && GOOGLE_MAPS_API_KEY) {
        const googleBuilding = await searchGoogleMaps(building.name + " " + building.location)
        if (googleBuilding) building.address = googleBuilding.address
    }

    return NextResponse.json(building, { status: 200 });
}