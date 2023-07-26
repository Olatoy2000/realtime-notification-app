import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://127.0.0.1:5173",
  },
});

let onlineUsers = [];

const addNewUser = (userName, socketId) => {
  !onlineUsers.some((user) => user.userName === userName) &&
    onlineUsers.push({ userName, socketId });
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId === socketId);
};

const getUser = (userName) => {
  return onlineUsers.find((user) => user.userName === userName);
};
io.on("connection", (socket) => {
  socket.on("newUser", (userName) => {
    addNewUser(userName, socket.id);
  });

  socket.on("sendNotification", ({ senderName, receiverName, type }) => {
    const receiver = getUser(receiverName);
    io.to(receiver.socketId).emit("getNotification", {
      senderName,
      type,
    });
  });

  socket.on("sendText", ({ senderName, receiverName, text }) => {
    const receiver = getUser(receiverName);
    io.to(receiver.socketId).emit("getText", {
      senderName,
      text,
    });
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen(3000);
