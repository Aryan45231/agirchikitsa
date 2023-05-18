import React from 'react';
import SocketIoProvider from "./socket.context";
import AuthProvider from "./auth.context";
const contextProviders = [SocketIoProvider,AuthProvider];

const CombinedContextProvider = ({ children }) => {
  const providers = contextProviders.reduceRight(
    (acc, ContextProvider) => <ContextProvider>{acc}</ContextProvider>,
    children
  );
  return providers;
};
export default CombinedContextProvider;