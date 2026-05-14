import { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const submit = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "16px",
        borderTop: "1px solid #1e293b"
      }}
    >
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "8px",
          border: "none"
        }}
      />

      <button onClick={submit}>Send</button>
    </div>
  );
};

export default MessageInput;