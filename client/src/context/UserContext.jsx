import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  
  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      {children}
    </UserContext.Provider>
  );
};
