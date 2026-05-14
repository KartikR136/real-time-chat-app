import http from "http";

import app from "./app.js";
import connectDB from "./config/db.js";
import env from "./config/env.js";
import { initializeSocket } from "./config/socket.js";

const startServer = async () => {
  await connectDB();

  const server = http.createServer(app);

  initializeSocket(server);

  server.listen(env.port, () => {
    console.log(
      `Server running in ${env.nodeEnv} mode on port ${env.port}`
    );
  });
};

startServer();