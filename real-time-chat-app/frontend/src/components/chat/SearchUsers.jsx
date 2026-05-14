import { useState } from "react";

const SearchUsers = ({ users }) => {
  const [query, setQuery] = useState("");

  const filtered = users.filter((user) =>
    user.username
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search users..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "16px"
        }}
      />

      {filtered.map((user) => (
        <div
          key={user._id}
          style={{
            padding: "10px",
            borderBottom: "1px solid #1e293b"
          }}
        >
          {user.username}
        </div>
      ))}
    </div>
  );
};

export default SearchUsers;