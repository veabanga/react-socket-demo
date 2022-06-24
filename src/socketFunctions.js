import io from 'socket.io-client';
let socket;

export const initiateSocket = (room) => {
  socket = io('http://localhost:3500');
  console.log(`Connecting socket...`);
  if (socket && room) socket.emit('join', room);
}
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}
export const subscribeToChat = (event,cb) => {
  if (!socket) return(true);
  socket.on(event, msg => {
    console.log('Websocket event received!');
    return cb(null, msg);
  });
}

export const joinRoom = (namespace,event,room) => {
    socket = io(`http://localhost:3500/${namespace}`);
    console.log(`Connecting socket...`);
    if (socket && event && room) socket.emit(event, {room:room});
  }

export const leaveRoom = (event,room) => {
console.log(`Connecting socket...`);
if (socket && event && room) socket.emit(event, {room:room});
}

export const sendMessage = (event, room, message) => {
  if (socket) socket.emit(event, { message, room });
}