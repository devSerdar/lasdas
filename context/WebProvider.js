import React, { createContext, useState } from "react";

export const WebContex = createContext();

export const WebProvider = ({ children }) => {
  const [menu, selectMenu] = useState("ALL");
  return (
    <WebContex.Provider value={{ menu, selectMenu }}>
      {children}
    </WebContex.Provider>
  );
};

export default WebProvider;
