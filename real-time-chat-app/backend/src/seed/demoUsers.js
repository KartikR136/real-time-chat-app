import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const users = [
  {
    username: "alex",
    email: "alex@example.com",
    password: "password123"
  },
  {
    username: "sarah",
    email: "sarah@example.com",
    password: "password123"
  },
  {
    username: "john",
    email: "john@example.com",
    password: "password123"
  }
];

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await User.deleteMany();

    await User.insertMany(users);

    console.log("Demo users inserted");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedUsers();