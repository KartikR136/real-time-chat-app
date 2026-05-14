import { useState } from "react";

import Navbar from "../components/common/Navbar";
import RoomList from "../components/chat/RoomList";
import UserList from "../components/chat/UserList";
import ChatWindow from "../components/chat/ChatWindow";
import SearchUsers from "../components/chat/SearchUsers";

import CreateRoomModal from "../components/modals/CreateRoomModal";
import UserProfileModal from "../components/modals/UserProfileModal";

import { useAuth } from "../hooks/useAuth";
import { useChat } from "../hooks/useChat";

const Dashboard = () => {
  const { user } = useAuth();
  const { rooms, users } = useChat();

  const [selectedRoom, setSelectedRoom] =
    useState(null);

  const [messages, setMessages] = useState([]);

  const [showCreateRoom, setShowCreateRoom] =
    useState(false);

  const [profileUser, setProfileUser] =
    useState(null);

  const unreadCounts = {
    "1": 3,
    "2": 1
  };

  const sendMessage = (content) => {
    const msg = {
      _id: Date.now(),
      sender: user._id,
      content,
      createdAt: new Date()
    };

    setMessages((prev) => [...prev, msg]);
  };

  const createRoom = (roomData) => {
    console.log("Creating room:", roomData);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Navbar />

      <div
        style={{
          display: "flex",
          height: "calc(100vh - 70px)"
        }}
      >
        <div
          style={{
            width: "350px",
            borderRight: "1px solid #1e293b",
            padding: "20px",
            overflowY: "auto"
          }}
        >
          <button
            onClick={() => setShowCreateRoom(true)}
          >
            + Create Room
          </button>

          <RoomList
            rooms={rooms}
            onSelect={setSelectedRoom}
          />

          <SearchUsers users={users} />

          <UserList
            users={users}
            unreadCounts={unreadCounts}
            onProfileClick={setProfileUser}
          />
        </div>

        <ChatWindow
          title={
            selectedRoom?.name ||
            "Realtime Global Chat"
          }
          messages={messages}
          currentUser={user}
          onSend={sendMessage}
        />
      </div>

      {showCreateRoom && (
        <CreateRoomModal
          onCreate={createRoom}
          onClose={() =>
            setShowCreateRoom(false)
          }
        />
      )}

      {profileUser && (
        <UserProfileModal
          user={profileUser}
          onClose={() => setProfileUser(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;