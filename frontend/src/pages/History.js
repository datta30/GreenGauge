import { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/history")
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  if (!history) {
    return <div className="card">Loading history...</div>;
  }

  return (
    <div className="card">
      <h2>📜 Usage History</h2>

      <h3>⚡ Electricity</h3>
      <ul>
        {history.electricity.map((e, index) => (
          <li key={index}>
            Units: {e.units}, CO₂: {e.co2} kg
          </li>
        ))}
      </ul>

      <h3>🚿 Water</h3>
      <ul>
        {history.water.map((w, index) => (
          <li key={index}>
            Usage: {w.usage}, Status: {w.waterStatus}
          </li>
        ))}
      </ul>

      <h3>♻️ Waste</h3>
      <ul>
        {history.waste.map((w, index) => (
          <li key={index}>
            Recyclable: {w.recyclable}, Recycling %: {w.recyclingPercent}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
