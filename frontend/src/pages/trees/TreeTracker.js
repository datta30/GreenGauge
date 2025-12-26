import { useState } from "react";

function TreeTracker({ addTree }) {
  const [treeName, setTreeName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Shade");
  const [result, setResult] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const calculateImpact = () => {
    // Fixed rule-based values
    const co2PerYear = 22; // kg/year
    const oxygenPerYear = 118; // kg/year

    let greenCover = 0;
    if (category === "Shade") greenCover = 10;
    if (category === "Fruit") greenCover = 8;
    if (category === "Ornamental") greenCover = 5;

    // Show result on screen
    setResult({
      co2: co2PerYear,
      oxygen: oxygenPerYear,
      cover: greenCover,
    });

    // Send tree data to App.js
    addTree({
  name: treeName,
  location: location,
  date: date,
  category: category,
  latitude: parseFloat(latitude),
  longitude: parseFloat(longitude),
  co2: co2PerYear,
  oxygen: oxygenPerYear,
  cover: greenCover,
});
  
  };

  return (
  <div className="card">
    <h3>🌳 Tree Plantation Tracker</h3>

    <div className="input-card">
      <div className="input-group">
        <label>Tree Name</label>
        <input
          type="text"
          placeholder="Neem, Mango, Peepal..."
          value={treeName}
          onChange={(e) => setTreeName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Location / Area</label>
        <input
          type="text"
          placeholder="City / Area"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Plantation Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Tree Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Shade">Shade</option>
          <option value="Fruit">Fruit</option>
          <option value="Ornamental">Ornamental</option>
        </select>
      </div>

      <div className="input-group">
        <label>Latitude</label>
        <input
          type="number"
          placeholder="e.g. 16.5062"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Longitude</label>
        <input
          type="number"
          placeholder="e.g. 80.6480"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>

      <button className="primary-btn" onClick={calculateImpact}>
        Calculate Green Impact
      </button>
    </div>

    {result && (
      <div style={{ marginTop: "12px" }}>
        <p>🌍 CO₂ Absorption: <b>{result.co2} kg / year</b></p>
        <p>🌬️ Oxygen Contribution: <b>{result.oxygen} kg / year</b></p>
        <p>🌱 Green Cover Increase: <b>{result.cover} sqm</b></p>
      </div>
    )}
  </div>
);

}

export default TreeTracker;
