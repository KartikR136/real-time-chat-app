const NotificationBell = ({ count }) => {
  return (
    <div
      style={{
        position: "relative",
        fontSize: "22px"
      }}
    >
      🔔

      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-10px",
            background: "red",
            borderRadius: "999px",
            padding: "2px 7px",
            fontSize: "12px"
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default NotificationBell;