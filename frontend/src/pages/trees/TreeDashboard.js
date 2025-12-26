import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

function TreeDashboard({ trees }) {
  const totalTrees = trees.length;

  const totalGreenCover = trees.reduce(
    (sum, tree) => sum + tree.cover,
    0
  );

  const totalCO2 = trees.reduce(
    (sum, tree) => sum + tree.co2,
    0
  );

  const totalOxygen = trees.reduce(
    (sum, tree) => sum + tree.oxygen,
    0
  );

  const data = {
    labels: ["Trees", "CO₂ (kg/year)", "Oxygen (kg/year)"],
    datasets: [
      {
        label: "Tree Impact",
        data: [totalTrees, totalCO2, totalOxygen],
        backgroundColor: "#2e7d32",
      },
    ],
  };

  return (
    <div className="card">
      <h2>🌿 Personal Green Dashboard</h2>

      <p>🌳 Total Trees Planted: <b>{totalTrees}</b></p>
      <p>🌱 Green Cover: <b>{totalGreenCover} sqm</b></p>
      <p>🌍 CO₂ Absorbed: <b>{totalCO2} kg / year</b></p>
      <p>🌬️ Oxygen Generated: <b>{totalOxygen} kg / year</b></p>

      {trees.length > 0 && <Bar data={data} />}
    </div>
  );
}

export default TreeDashboard;
