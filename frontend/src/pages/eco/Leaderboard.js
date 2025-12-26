function Leaderboard() {
  const users = [
    { name: "You", score: 120 },
    { name: "Community Avg", score: 80 },
    { name: "Green Pro", score: 150 },
  ];

  return (
    <div className="card">
      <h3>🏆 Leaderboard</h3>
      {users.map((u, i) => (
        <p key={i}>{i + 1}. {u.name} – {u.score}</p>
      ))}
    </div>
  );
}

export default Leaderboard;
