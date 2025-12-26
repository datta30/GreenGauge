function EcoStreak({ ecoScore }) {
  let streakLabel = "🌿 Getting Started";

  if (ecoScore >= 30) streakLabel = "🔥 3-Day Eco Streak";
  if (ecoScore >= 60) streakLabel = "🌱 7-Day Eco Streak";
  if (ecoScore >= 100) streakLabel = "🌳 30-Day Eco Streak";

  return (
    <div className="card">
      <h3>🔥 Eco Streak</h3>
      <p><b>Status:</b> {streakLabel}</p>
      <p><b>Total Green Score:</b> {ecoScore}</p>
    </div>
  );
}

export default EcoStreak;
