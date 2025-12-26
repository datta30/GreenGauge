import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function TreeMap({ trees }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("tree-map").setView([16.5062, 80.6480], 6);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapRef.current);
    }

    trees.forEach((tree) => {
      if (tree.latitude && tree.longitude) {
        L.marker([tree.latitude, tree.longitude])
          .addTo(mapRef.current)
          .bindPopup(
            `<b>${tree.name}</b><br/>
             ${tree.category}<br/>
             CO₂: ${tree.co2} kg/year`
          );
      }
    });
  }, [trees]);

  return (
    <div className="card">
      <h3>🗺️ Community Green Map</h3>
      <div
        id="tree-map"
        style={{ height: "400px", width: "100%" }}
      ></div>
    </div>
  );
}

export default TreeMap;
