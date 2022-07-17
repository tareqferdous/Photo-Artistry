import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddReview from "./components/Dashboard/AddReview";
import AddService from "./components/Dashboard/AddService";
import ManageServices from "./components/Dashboard/ManageServices";
import OrderList from "./components/Dashboard/OrderList";
import DashboardPage from "./pages/DashboardPage";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";

// Create User Context
export const UserContext = createContext();

function App() {
  const [selectedService, setSelectedService] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        selectedService,
        setSelectedService,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="services/:id" element={<ServicePage />} />
        <Route path="/addService" element={<AddService />}></Route>
        <Route path="/addReview" element={<AddReview />}></Route>
        <Route path="/manageService" element={<ManageServices />}></Route>
        <Route path="/orderList" element={<OrderList />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
