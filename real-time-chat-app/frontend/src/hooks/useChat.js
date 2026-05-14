import { useEffect, useState } from "react";
import {
  fetchRooms,
  fetchUsers
} from "../api/chatApi";

export const useChat = () => {
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadChatData = async () => {
      try {
        const roomRes = await fetchRooms();
        const userRes = await fetchUsers();

        setRooms(roomRes.data.rooms || []);
        setUsers(userRes.data.users || []);
      } catch (error) {
        console.error(error);
      }
    };

    loadChatData();
  }, []);

  return {
    rooms,
    users
  };
};