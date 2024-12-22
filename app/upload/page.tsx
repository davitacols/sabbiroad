"use client";

import { useState } from "react";
import { Upload, CheckCircle, AlertCircle, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"success" | "error" | null>(null);
  const [locationData, setLocationData] = useState<{
    address: string;
    lat: number;
    lng: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    setUploadStatus(null);
    setLocationData(null);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }
      setLocationData({
        address: data.address,
        lat: data.coordinates.lat,
        lng: data.coordinates.lng,
      });
      setUploadStatus("success");
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus("error");
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-16 sm:pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto bg-neutral-900/50 border-white/5 backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Upload Building Image
              </CardTitle>
              <CardDescription className="text-gray-400">
                Upload a building image for AI-powered analysis and classification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Label htmlFor="image" className="text-gray-200">
                    Building Image
                  </Label>
                  <div className="relative">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("image")?.click()}
                      className="w-full h-32 border-dashed border-2 border-white/10 hover:border-white/20 bg-white/5 text-gray-400 hover:text-white transition-colors"
                    >
                      {preview ? (
                        <div className="flex flex-col items-center">
                          <ImageIcon className="h-6 w-6 mb-2" />
                          <span>Change image</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Upload className="h-6 w-6 mb-2" />
                          <span>Click to upload or drag and drop</span>
                          <span className="text-sm text-gray-500">
                            SVG, PNG, JPG or GIF (max. 800x400px)
                          </span>
                        </div>
                      )}
                    </Button>
                  </div>
                </div>

                {preview && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6"
                  >
                    <div className="relative rounded-lg overflow-hidden bg-white/5 p-2">
                      <img src={preview} alt="Preview" className="w-full h-auto rounded-lg" />
                    </div>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-l"
                  disabled={!file || isUploading}
                >
                  {isUploading ? (
                    <>
                      <Upload className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" /> Analyze Building
                    </>
                  )}
                </Button>
              </form>

              {uploadStatus === "success" && locationData && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <Alert className="bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Analysis Complete</AlertTitle>
                    <AlertDescription>
                      Building successfully analyzed. Location identified at:
                      <strong className="block mt-1 text-emerald-200">{locationData.address}</strong>
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}

              {uploadStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <Alert className="bg-red-500/10 border-red-500/20 text-red-300">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      {error || "There was an error processing your image. Please try again."}
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}

              {locationData && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">Location</h3>
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${locationData.lat},${locationData.lng}`}
                      width="100%"
                      height="300"
                      className="grayscale"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
