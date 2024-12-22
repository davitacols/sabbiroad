"use client";

import { useState, useEffect } from "react";
import { Database, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Dynamically import MapComponent to disable SSR
import dynamic from "next/dynamic";

type BuildingMetadata = {
  name: string;
  location: string;
  yearConstructed: number;
  height: string;
  architect: string;
  description: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

// Dynamically import MapComponent with ssr: false
const MapComponent = dynamic(
  () => import("@/components/map-component").then((mod) => mod.MapComponent),
  { ssr: false }
);

export default function MetadataPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [metadata, setMetadata] = useState<BuildingMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [directionsUrl, setDirectionsUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMetadata(null);
    setDirectionsUrl(null);

    try {
      const response = await fetch(`/api/metadata?search=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch building metadata");
      }
      const data = await response.json();
      setMetadata(data);
    } catch (error) {
      console.error("Error fetching metadata:", error);
      setError("Failed to fetch building metadata. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetDirections = () => {
    if (metadata?.coordinates) {
      const currentLocation = "current+location"; // This can be changed to user's location if needed
      const destination = `${metadata.coordinates.lat},${metadata.coordinates.lng}`;
      const url = `https://www.google.com/maps/dir/?api=1&origin=${currentLocation}&destination=${destination}&travelmode=driving`;
      setDirectionsUrl(url);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Building Metadata</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search Building</Label>
              <div className="flex space-x-2">
                <Input
                  id="search"
                  type="text"
                  placeholder="Enter building name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  required
                />
                <Button type="submit" disabled={isLoading}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>
          {error && <div className="mt-4 text-red-500">{error}</div>}
          {isLoading && <div className="mt-4">Loading...</div>}
          {metadata && (
            <div className="mt-6 space-y-4">
              <h3 className="font-semibold text-lg">{metadata.name}</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">Location:</div>
                <div>{metadata.location}</div>
                <div className="font-medium">Year Constructed:</div>
                <div>{metadata.yearConstructed}</div>
                <div className="font-medium">Height:</div>
                <div>{metadata.height}</div>
                <div className="font-medium">Architect:</div>
                <div>{metadata.architect}</div>
                <div className="font-medium">Address:</div>
                <div>{metadata.address}</div>
              </div>
              <div>
                <div className="font-medium mb-1">Description:</div>
                <p>{metadata.description}</p>
              </div>
              {metadata.coordinates && (
                <div className="h-64 w-full">
                  <MapComponent
                    lat={metadata.coordinates.lat}
                    lng={metadata.coordinates.lng}
                    name={metadata.name}
                  />
                </div>
              )}
              <div className="mt-4">
                <Button
                  className="w-full"
                  onClick={handleGetDirections}
                  disabled={!metadata.coordinates}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
                {directionsUrl && (
                  <div className="mt-2">
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
