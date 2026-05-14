import { formatTime } from "../../utils/formatTime";

const MessageBubble = ({ message, own }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: own ? "flex-end" : "flex-start",
        marginBottom: "12px"
      }}
    >
      <div
        style={{
          background: own ? "#2563eb" : "#1e293b",
          padding: "10px 14px",
          borderRadius: "12px",
          maxWidth: "70%"
        }}
      >
        <p>{message.content}</p>
        <small>{formatTime(message.createdAt)}</small>
      </div>
    </div>
  );
};

export default MessageBubble;