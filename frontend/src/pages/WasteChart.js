import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function WastePieChart({ recyclable, organic, nonRecyclable }) {
  const data = {
    labels: ["Recyclable ♻️", "Organic 🌱", "Non-Recyclable 🚫"],
    datasets: [
      {
        data: [recyclable, organic, nonRecyclable],
        backgroundColor: [
          "rgba(34,197,94,0.8)",
          "rgba(132,204,22,0.8)",
          "rgba(239,68,68,0.8)",
        ],
        borderColor: "#111827",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div className="card">
      <h4>📊 Waste Distribution</h4>
      <Pie data={data} options={options} />
    </div>
  );
}

export default WastePieChart;
