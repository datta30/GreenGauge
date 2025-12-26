function EcoActionLog({ addEcoPoints }) {
  const actions = [
    { name: "Used reusable bag", points: 5 },
    { name: "Did composting", points: 10 },
    { name: "Planted a tree", points: 20 },
    { name: "Watered plants", points: 6 },
    { name: "Used public transport", points: 8 },
    { name: "Saved electricity", points: 8 },
    { name: "Rainwater harvesting", points: 15 },
    { name: "Did gardening", points: 7 },
    { name: "Avoided plastic usage", points: 6 },
  ];

  return (
    <div className="card">
      <h3>♻️ Eco Action Log</h3>

      {actions.map((action) => (
        <button
          key={action.name}
          style={{
            width: "100%",
            margin: "6px 0",
            padding: "10px",
            borderRadius: "8px",
          }}
          onClick={() => addEcoPoints(action.points)}
        >
          {action.name} (+{action.points})
        </button>
      ))}
    </div>
  );
}

export default EcoActionLog;
