import { useState } from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";

const ChatWindow = ({
  title,
  messages,
  currentUser,
  onSend
}) => {
  const [typing] = useState(false);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
    >
      <ChatHeader title={title} />

      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto"
        }}
      >
        {messages.map((message) => (
          <MessageBubble
            key={message._id}
            message={message}
            own={
              message.sender === currentUser?._id ||
              message.sender?._id === currentUser?._id
            }
          />
        ))}

        {typing && <div>typing...</div>}
      </div>

      <MessageInput onSend={onSend} />
    </div>
  );
};

export default ChatWindow;