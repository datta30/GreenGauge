import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Save user session
      localStorage.setItem("user", JSON.stringify(data.user));

      // Notify App.js
      onLogin(data.user);
    } catch (err) {
      setError("Server not reachable. Please try again.");
    }
  };

  return (
    <div className="card">
      <h2>🌱 Welcome Back</h2>
      <p style={{ textAlign: "center", opacity: 0.8 }}>
        Login to your GreenGauge account
      </p>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

      {error && (
        <p style={{ color: "#fca5a5", marginTop: "12px", textAlign: "center" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default Login;
