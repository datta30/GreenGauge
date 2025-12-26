import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function CO2Chart({ totalCO2 }) {
  const data = {
    labels: ["CO₂ Emission"],
    datasets: [
      {
        label: "CO₂ (kg)",
        data: [totalCO2],
        backgroundColor: "#2e7d32",
      },
    ],
  };

  return <Bar data={data} />;
}

export default CO2Chart;
