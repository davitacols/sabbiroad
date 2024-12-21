import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Camera, Search, Database } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">SABIROAD Features</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="mr-2 h-6 w-6" aria-label="Image Upload" />
              Image Upload
            </CardTitle>
          </CardHeader>
          <CardContent>
            Upload images of buildings for instant classification and analysis using our advanced AI algorithms.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Camera className="mr-2 h-6 w-6" aria-label="Real-time Camera" />
              Real-time Camera
            </CardTitle>
          </CardHeader>
          <CardContent>
            Use your device's camera for real-time building identification, perfect for on-the-go analysis.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-6 w-6" aria-label="AI Prediction" />
              AI Prediction
            </CardTitle>
          </CardHeader>
          <CardContent>
            Get accurate predictions on building types and architectural styles using our state-of-the-art machine learning models.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="mr-2 h-6 w-6" aria-label="Metadata Access" />
              Metadata Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            Access detailed information about identified buildings and structures, including historical and architectural data.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
