import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {import { useAuth } from "../../hooks/useAuth";
import NotificationBell from "../chat/NotificationBell";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div
      style={{
        padding: "16px 24px",
        borderBottom: "1px solid #1e293b",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2>RealtimeChat Pro</h2>

      <div
        style={{
          display: "flex",
          gap: "18px",
          alignItems: "center"
        }}
      >
        <NotificationBell count={4} />
        <span>{user?.username}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
  const { user, logout } = useAuth();

  return (
    <div
      style={{
        padding: "16px 24px",
        borderBottom: "1px solid #1e293b",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2>RealtimeChat</h2>

      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center"
        }}
      >
        <span>{user?.username}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;