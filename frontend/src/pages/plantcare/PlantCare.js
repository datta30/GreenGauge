import { useState } from "react";

function PlantCare() {
  const [plant, setPlant] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [watering, setWatering] = useState("");
  const [careInfo, setCareInfo] = useState(null);

  const showCare = () => {
    if (!plant) {
      setCareInfo(null);
      return;
    }

    // Rule-based care guide (NO AI)
    let info = {};

    if (plant === "Tree") {
      info = {
        sun: "Full sunlight (6–8 hours/day)",
        water: "Water deeply once every 2–3 days",
        tip: "Mulching helps retain soil moisture",
      };
    } else if (plant === "Flower") {
      info = {
        sun: "Partial to full sunlight",
        water: "Water daily in the morning",
        tip: "Remove dead flowers to encourage growth",
      };
    } else if (plant === "Vegetable") {
      info = {
        sun: "Full sunlight",
        water: "Water daily, avoid overwatering",
        tip: "Use compost for better yield",
      };
    } else if (plant === "Indoor Plant") {
      info = {
        sun: "Indirect sunlight",
        water: "Water once every 3–4 days",
        tip: "Avoid direct sun to prevent leaf burn",
      };
    }

    setCareInfo(info);
  };

  return (
    <div className="card">
      <h3>💧 Plant Care Guide</h3>

      <div className="input-card">
        <div className="input-group">
          <label>Plant Type</label>
          <select value={plant} onChange={(e) => setPlant(e.target.value)}>
            <option value="">Select plant type</option>
            <option value="Tree">Tree</option>
            <option value="Flower">Flower</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Indoor Plant">Indoor Plant</option>
          </select>
        </div>

        <div className="input-group">
          <label>Sunlight Preference (optional)</label>
          <input
            type="text"
            placeholder="e.g. Full Sun / Partial Shade"
            value={sunlight}
            onChange={(e) => setSunlight(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Watering Preference (optional)</label>
          <input
            type="text"
            placeholder="e.g. Daily / Alternate Days"
            value={watering}
            onChange={(e) => setWatering(e.target.value)}
          />
        </div>

        <button className="primary-btn" onClick={showCare}>
          Show Care Instructions
        </button>
      </div>

      {careInfo && (
        <div style={{ marginTop: "14px" }}>
          <p>🌞 <b>Sunlight:</b> {careInfo.sun}</p>
          <p>💧 <b>Watering:</b> {careInfo.water}</p>
          <p>🌱 <b>Tip:</b> {careInfo.tip}</p>
        </div>
      )}
    </div>
  );
}

export default PlantCare;
