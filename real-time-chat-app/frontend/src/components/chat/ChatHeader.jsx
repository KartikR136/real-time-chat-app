const ChatHeader = ({ title }) => {
  return (
    <div
      style={{
        padding: "18px",
        borderBottom: "1px solid #1e293b",
        fontWeight: "bold"
      }}
    >
      {title}
    </div>
  );
};

export default ChatHeader;