import React, {  useEffect, useState } from "react";
import {
  initiateSocket,
  joinRoom,
  leaveRoom,
  subscribeToStream,
} from "./socketFunctions";

export const TestSocket = () => {
  const [count, setCount] = useState();


  // const handleSend = () => {
  //   console.log("Sending..........");
  //   socket.emit("greeksheet_client_connected", { msg: "Hi I am React..." });
  //   console.log("Sent..........");
  // };

  useEffect(() => {
    initiateSocket("greeksheet");
    subscribeToStream("live_count", getGreekData)

    return (()=>{
      
    })
  },[]);

  //   return () => {
  //     console.log("Component Unmounted========");
  //     leaveRoom('leave','greeksheet')
  //   }
  // }, [])

  const getGreekData = (msg) => {
    console.log(msg);
    setCount(() => {
      return msg.data;
    });
  };

  ;

  // socket.on("live_count", (msg) => {
  //   console.log(msg);
  //   setCount(()=>{

  //     return msg.count
  //   })
  // });

  return (
    <>
      <div>TestSocket</div>
      <div>Count: {count}</div>
      <button onClick={() => joinRoom("join", "greeksheet")}>
        Join Room
      </button>
      <button onClick={() => leaveRoom("leave", "greeksheet")}>
        Leave Room
      </button>
    </>
  );
};
