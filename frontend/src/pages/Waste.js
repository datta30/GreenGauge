import { useState } from "react";

function Waste({ setWasteData }) {
  const [recyclable, setRecyclable] = useState("");
  const [organic, setOrganic] = useState("");
  const [non, setNon] = useState("");

  const submitWaste = () => {
    setWasteData({
      recyclable: Number(recyclable),
      organic: Number(organic),
      non: Number(non),
    });
  };

  return (
    <div className="card">
      <h3>♻️ Waste Segregation</h3>

      <div className="input-group">
        <label>Recyclable (kg)</label>
        <input
          type="number"
          value={recyclable}
          onChange={(e) => setRecyclable(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Organic (kg)</label>
        <input
          type="number"
          value={organic}
          onChange={(e) => setOrganic(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Non-Recyclable (kg)</label>
        <input
          type="number"
          value={non}
          onChange={(e) => setNon(e.target.value)}
        />
      </div>

      <button className="primary-btn" onClick={submitWaste}>
        Update Waste Chart
      </button>
    </div>
  );
}

export default Waste;
