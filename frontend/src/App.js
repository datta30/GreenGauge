import { useState } from "react";
import "./App.css";

import Electricity from "./pages/Electricity";
import Water from "./pages/Water";
import Waste from "./pages/Waste";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";

import TreeTracker from "./pages/trees/TreeTracker";
import TreeDashboard from "./pages/trees/TreeDashboard";
import TreeMap from "./pages/trees/TreeMap";

import PlantCare from "./pages/plantcare/PlantCare";
import EcoActionLog from "./pages/eco/EcoActionLog";
import EcoStreak from "./pages/eco/EcoStreak";
import KnowledgeHub from "./pages/KnowledgeHub";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const [totalCO2, setTotalCO2] = useState(0);
  const [waterStatus, setWaterStatus] = useState(0);

  // ✅ Waste data for pie chart
  const [wasteData, setWasteData] = useState({
    recyclable: 0,
    organic: 0,
    non: 0,
  });

  const [trees, setTrees] = useState([]);
  const [ecoScore, setEcoScore] = useState(0);

  const addTree = (tree) => {
    setTrees((prev) => [...prev, tree]);
  };

  const addEcoPoints = (points) => {
    setEcoScore((prev) => prev + points);
  };

  return (
    <div className="app">
      <h1>🌍 GreenGauge</h1>
      <p className="subtitle">Smart Sustainability Tracking Platform</p>

      {/* Tabs */}
      <div className="tabs">
        <button onClick={() => setActiveTab("dashboard")}>📊 Dashboard</button>
        <button onClick={() => setActiveTab("resources")}>⚡ Resources</button>
        <button onClick={() => setActiveTab("trees")}>🌳 Trees</button>
        <button onClick={() => setActiveTab("eco")}>♻️ Eco Actions</button>
        <button onClick={() => setActiveTab("knowledge")}>📚 Knowledge</button>
      </div>

      {/* DASHBOARD */}
      {activeTab === "dashboard" && (
        <div className="tab active">
          {/* Dashboard receives wasteData for pie chart */}
          <Dashboard
            totalCO2={totalCO2}
            waterStatus={waterStatus}
            wasteData={wasteData}
            ecoScore={ecoScore}
          />
          <EcoStreak ecoScore={ecoScore} />
        </div>
      )}

      {/* RESOURCES */}
      {activeTab === "resources" && (
        <div className="tab active">
          <Electricity setTotalCO2={setTotalCO2} />
          <Water setWaterStatus={setWaterStatus} />
          <Waste setWasteData={setWasteData} />
          <History />
        </div>
      )}

      {/* TREES */}
      {activeTab === "trees" && (
        <div className="tab active">
          <TreeTracker addTree={addTree} />
          <TreeDashboard trees={trees} />
          <TreeMap trees={trees} />
          <PlantCare />
        </div>
      )}

      {/* ECO ACTIONS */}
      {activeTab === "eco" && (
        <div className="tab active">
          <EcoActionLog addEcoPoints={addEcoPoints} />
          <EcoStreak ecoScore={ecoScore} />
        </div>
      )}

      {/* KNOWLEDGE */}
      {activeTab === "knowledge" && (
        <div className="tab active">
          <KnowledgeHub />
        </div>
      )}
    </div>
  );
}

export default App;
