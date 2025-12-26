import { useState } from "react";

function Electricity({ setTotalCO2 }) {
  const [units, setUnits] = useState("");
  const [result, setResult] = useState(null);

  const calculateCO2 = () => {
    // Rule-based calculation
    const co2Emission = units * 0.82; // kg CO₂ per kWh (approx)

    setResult(co2Emission.toFixed(2));
    setTotalCO2(co2Emission.toFixed(2));
  };

  return (
    <div className="card">
      <h3>⚡ Electricity Usage</h3>

      <div className="input-card">
        <div className="input-group">
          <label>Monthly Consumption (kWh)</label>
          <input
            type="number"
            placeholder="Enter units consumed"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
          />
        </div>

        <button className="primary-btn" onClick={calculateCO2}>
          Calculate CO₂ Impact
        </button>
      </div>

      {result && (
        <p style={{ marginTop: "12px" }}>
          🌍 Estimated CO₂ Emission: <b>{result} kg</b>
        </p>
      )}
    </div>
  );
}

export default Electricity;
