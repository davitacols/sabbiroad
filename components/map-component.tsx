import React, { useEffect, useRef } from "react";

// Define the component props
type MapComponentProps = {
  lat: number;
  lng: number;
  name: string;
};

export const MapComponent = ({ lat, lng, name }: MapComponentProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current && window.google) {
      // Initialize the map
      const map = new google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 15, // Zoom level
      });

      // Create a marker
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: name,
      });

      // Optionally, you can add an info window to display the name
      const infoWindow = new google.maps.InfoWindow({
        content: name,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    }
  }, [lat, lng, name]);

  return <div ref={mapRef} style={{ height: "100%", width: "100%" }} />;
};
