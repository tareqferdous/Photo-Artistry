import React, { createContext, useState } from "react";

export const ShipmentContext = createContext(null);

const ShipmentProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <ShipmentContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </ShipmentContext.Provider>
  );
};

export default ShipmentProvider;
