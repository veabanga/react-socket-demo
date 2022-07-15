import io from "socket.io-client";
let socket;

export const initiateSocket = (namespace) => {
  socket = io(`http://localhost:3500/${namespace}`);
  console.log(`connected to socket...`);
};
export const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};
export const subscribeToStream = (event, cb) => {
  if (!socket) return true;
  socket.on(event, (msg) => {
    console.log("Websocket event received!");
    return cb(msg);
  });
};

export const joinRoom = (event, room) => {
  console.log(`Joining room...`);
  if (socket && event && room) socket.emit(event, { room: room });
};

export const leaveRoom = (event, room) => {
  if (socket && event && room) {
    socket.emit(event, { room: room });
  }
};

export const sendMessage = (event, room, message) => {
  if (socket) socket.emit(event, { message, room });
};
