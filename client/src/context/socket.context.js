import React, { createContext, useEffect } from "react";
import io from "socket.io-client";


export const SocketIoContext = createContext(90);
// const staging = "https://job-check-list-backedn.vercel.app";
// const local = "http://localhost:1010";
const socket = "helllo"
export default function SocketIoProvider({ children }) {
  // useEffect(() => { 
  //  return ()=> socket.close();
  // }, []);
  return (
    <SocketIoContext.Provider value={{socket}}>
      {children}
    </SocketIoContext.Provider>
  );
}


