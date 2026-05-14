import ChatWindow from "../components/chat/ChatWindow";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const PrivateChat = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);

  const sendMessage = (content) => {
    setMessages((prev) => [
      ...prev,
      {
        _id: Date.now(),
        content,
        sender: user._id,
        createdAt: new Date()
      }
    ]);
  };

  return (
    <div style={{ height: "100vh" }}>
      <ChatWindow
        title="Private Chat"
        messages={messages}
        currentUser={user}
        onSend={sendMessage}
      />
    </div>
  );
};

export default PrivateChat;