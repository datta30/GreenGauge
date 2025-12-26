import { useState } from "react";

function Water({ setWaterStatus }) {
  const [water, setWater] = useState("");
  const [status, setStatus] = useState(null);

  const checkWater = () => {
    let result;

    if (water <= 135) {
      result = "Optimal Usage ✅";
    } else {
      result = "Over Usage ⚠️";
    }

    setStatus(result);
    setWaterStatus(result);
  };

  return (
    <div className="card">
      <h3>🚿 Water Usage</h3>

      <div className="input-card">
        <div className="input-group">
          <label>Daily Water Usage (Liters)</label>
          <input
            type="number"
            placeholder="Enter water usage"
            value={water}
            onChange={(e) => setWater(e.target.value)}
          />
        </div>

        <button className="primary-btn" onClick={checkWater}>
          Analyze Water Usage
        </button>
      </div>

      {status && (
        <p style={{ marginTop: "12px" }}>
          💧 Status: <b>{status}</b>
        </p>
      )}
    </div>
  );
}

export default Water;
