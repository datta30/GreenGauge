import { useState } from "react";

function KnowledgeHub() {
  const [open, setOpen] = useState(null);

  const topics = [
    {
      title: "🌱 Best Trees to Plant in Urban Areas",
      content: (
        <>
          <p><b>Recommended Trees:</b></p>
          <ul>
            <li><b>Neem:</b> Absorbs air pollutants, medicinal benefits</li>
            <li><b>Peepal:</b> High oxygen production</li>
            <li><b>Ashoka:</b> Compact roots, roadside-friendly</li>
            <li><b>Banyan:</b> Provides large shade, reduces heat</li>
            <li><b>Tulsi:</b> Low maintenance, purifies air</li>
          </ul>
          <p><b>Why it matters:</b> Urban tree selection reduces pollution, heat, and improves air quality.</p>
        </>
      ),
    },
    {
      title: "💧 Rainwater Harvesting Tips",
      content: (
        <>
          <ul>
            <li>Rooftop rainwater collection systems</li>
            <li>Recharge pits to replenish groundwater</li>
            <li>Storage tanks for household reuse</li>
          </ul>
          <p><b>Benefits:</b></p>
          <ul>
            <li>Saves 30–40% of water annually</li>
            <li>Reduces water bills</li>
            <li>Prevents urban flooding</li>
          </ul>
        </>
      ),
    },
    {
      title: "⚡ How to Reduce Home Energy Usage",
      content: (
        <>
          <ul>
            <li>Use LED bulbs instead of incandescent</li>
            <li>Switch off appliances when idle</li>
            <li>Maximize natural daylight</li>
            <li>Use energy-efficient appliances</li>
          </ul>
          <p><b>Impact:</b> Saving 1 unit of electricity reduces ~0.8 kg CO₂ emissions.</p>
        </>
      ),
    },
    {
      title: "♻️ Waste Segregation Guidelines",
      content: (
        <>
          <ul>
            <li><b>Wet Waste:</b> Food scraps, organic matter</li>
            <li><b>Dry Waste:</b> Paper, plastic, metal</li>
            <li><b>Hazardous Waste:</b> Batteries, e-waste</li>
          </ul>
          <p><b>Why segregation is important:</b> Enables recycling, composting, and reduces landfill waste.</p>
        </>
      ),
    },
    {
      title: "🌍 Government Green Initiatives",
      content: (
        <>
          <ul>
            <li>Swachh Bharat Abhiyan</li>
            <li>National Afforestation Programme</li>
            <li>Jal Jeevan Mission</li>
            <li>Solar Rooftop Subsidy Schemes</li>
          </ul>
          <p><b>Purpose:</b> Encourages citizens to participate in national sustainability programs.</p>
        </>
      ),
    },
  ];

  return (
    <div className="card">
      <h2>📚 Green Knowledge Hub</h2>

      {topics.map((topic, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <button
            onClick={() => setOpen(open === index ? null : index)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "12px",
              borderRadius: "10px",
              background: "#1e293b",
              color: "white",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {topic.title}
          </button>

          {open === index && (
            <div style={{ padding: "12px 16px" }}>
              {topic.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default KnowledgeHub;
