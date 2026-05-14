import { Link } from "react-router-dom";

const UserList = ({
  users,
  unreadCounts = {},
  onProfileClick
}) => {
  return (
    <div>
      <h3 style={{ marginTop: "24px" }}>
        Direct Messages
      </h3>

      {users.map((user) => (
        <div
          key={user._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px",
            borderBottom: "1px solid #1e293b"
          }}
        >
          <Link to={`/chat/${user._id}`}>
            {user.username}
            {user.isOnline && " 🟢"}
          </Link>

          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center"
            }}
          >
            {unreadCounts[user._id] > 0 && (
              <span
                style={{
                  background: "red",
                  borderRadius: "999px",
                  padding: "2px 8px",
                  fontSize: "12px"
                }}
              >
                {unreadCounts[user._id]}
              </span>
            )}

            <button
              onClick={() => onProfileClick(user)}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;