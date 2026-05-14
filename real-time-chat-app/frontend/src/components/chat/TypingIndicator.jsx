const TypingIndicator = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        padding: "8px"
      }}
    >
      <span>●</span>
      <span>●</span>
      <span>●</span>
      <span style={{ marginLeft: "10px" }}>
        Someone is typing...
      </span>
    </div>
  );
};

export default TypingIndicator;