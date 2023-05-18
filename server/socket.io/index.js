const { Server } = require("socket.io"),
server = require("../index"),
io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("joinChannel", (channelID) => {
    socket.join(channelID);
  });

  socket.on("assignTask", (payload) => {
    socket.to(payload.channelID).emit("receiveTask",payload);
  });
  socket.on("changeTaskStatus", (payload) => {
    socket.to(payload.channelID).emit("changeTaskStatus",payload);
  });
});
