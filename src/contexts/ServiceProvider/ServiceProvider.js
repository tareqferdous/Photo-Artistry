import React, { createContext, useState } from "react";

export const ServiceContext = createContext(null);

const ServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState([]);

  return (
    <ServiceContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
