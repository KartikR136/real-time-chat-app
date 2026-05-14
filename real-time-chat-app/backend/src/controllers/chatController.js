import Message from "../models/Message.js";
import Room from "../models/Room.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find()
    .populate("members", "username avatar isOnline")
    .populate("createdBy", "username");

  res.json({
    success: true,
    rooms
  });
});

export const createRoom = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const room = await Room.create({
    name,
    description,
    createdBy: req.user.id,
    members: [req.user.id]
  });

  res.status(201).json({
    success: true,
    room
  });
});

export const getRoomMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({
    room: req.params.roomId
  })
    .populate("sender", "username avatar")
    .sort({ createdAt: 1 });

  res.json({
    success: true,
    messages
  });
});

export const getPrivateMessages = asyncHandler(async (req, res) => {
  const targetUser = req.params.userId;

  const messages = await Message.find({
    $or: [
      {
        sender: req.user.id,
        recipient: targetUser
      },
      {
        sender: targetUser,
        recipient: req.user.id
      }
    ]
  })
    .populate("sender", "username avatar")
    .sort({ createdAt: 1 });

  res.json({
    success: true,
    messages
  });
});