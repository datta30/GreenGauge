import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function Dashboard({ totalCO2, waterStatus, wasteData, ecoScore }) {
  const axisColor = "#ecfdf5";

  return (
    <div className="grid">
      <div className="card">
        <h3>⚡ Electricity</h3>
        <Bar
          data={{
            labels: ["CO₂"],
            datasets: [{ data: [totalCO2], backgroundColor: "#ef4444" }],
          }}
          options={{
            plugins: { legend: { labels: { color: axisColor } } },
            scales: {
              x: { ticks: { color: axisColor } },
              y: { ticks: { color: axisColor } },
            },
          }}
        />
      </div>

      <div className="card">
        <h3>🚿 Water</h3>
        <Bar
          data={{
            labels: ["Usage"],
            datasets: [{ data: [waterStatus], backgroundColor: "#3b82f6" }],
          }}
          options={{
            plugins: { legend: { labels: { color: axisColor } } },
            scales: {
              x: { ticks: { color: axisColor } },
              y: { ticks: { color: axisColor } },
            },
          }}
        />
      </div>

      <div className="card">
        <h3>♻️ Waste</h3>
        <Pie
          data={{
            labels: ["Recyclable", "Organic", "Non-Recyclable"],
            datasets: [
              {
                data: [wasteData.recyclable, wasteData.organic, wasteData.non],
                backgroundColor: ["#22c55e", "#84cc16", "#ef4444"],
              },
            ],
          }}
          options={{
            plugins: { legend: { labels: { color: axisColor } } },
          }}
        />
      </div>

      <div className="card">
        <h3>🌱 Green Score</h3>
        <h1>{ecoScore}</h1>
      </div>
    </div>
  );
}
