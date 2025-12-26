function Profile({ user, onLogout }) {
  return (
    <div className="card profile">
      <h3>👤 User Profile</h3>

      <p><b>Name:</b> {user?.name}</p>
      <p><b>Email:</b> {user?.email}</p>

      <button onClick={onLogout} style={{ marginTop: "10px" }}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
