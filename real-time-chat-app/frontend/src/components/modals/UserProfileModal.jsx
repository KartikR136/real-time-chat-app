const UserProfileModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "grid",
        placeItems: "center",
        zIndex: 1000
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#111827",
          padding: "24px",
          borderRadius: "12px"
        }}
      >
        <img
          src={user.avatar}
          alt={user.username}
          width="80"
          style={{ borderRadius: "50%" }}
        />

        <h2>{user.username}</h2>
        <p>{user.email}</p>
        <p>{user.isOnline ? "Online" : "Offline"}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserProfileModal;