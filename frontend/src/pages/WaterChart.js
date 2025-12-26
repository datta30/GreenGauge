import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

function WaterChart({ waterStatus }) {
  const data = {
    labels: ["Water Usage"],
    datasets: [
      {
        label: "Liters",
        data: [waterStatus],
        backgroundColor: waterStatus >= 0 ? "#2e7d32" : "#c62828",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default WaterChart;
