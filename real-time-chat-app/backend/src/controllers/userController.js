import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");

  res.json({
    success: true,
    users
  });
});

export const searchUsers = asyncHandler(async (req, res) => {
  const query = req.query.q || "";

  const users = await User.find({
    username: {
      $regex: query,
      $options: "i"
    }
  }).select("-password");

  res.json({
    success: true,
    users
  });
});