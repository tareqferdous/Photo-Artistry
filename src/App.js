import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Authentication/Login";
import Registration from "./pages/Authentication/Registration";
import AddReview from "./components/Dashboard/AddReview";
import AddService from "./components/Dashboard/AddService";
import ManageServices from "./components/Dashboard/ManageServices";
import OrderList from "./components/Dashboard/OrderList";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import ServiceProvider from "./contexts/ServiceProvider/ServiceProvider";

function App() {
  return (
    <AuthProvider>
      <ServiceProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="services/:id" element={<ServicePage />} />
          <Route path="/addService" element={<AddService />}></Route>
          <Route path="/addReview" element={<AddReview />}></Route>
          <Route path="/manageService" element={<ManageServices />}></Route>
          <Route path="/orderList" element={<OrderList />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </ServiceProvider>
    </AuthProvider>
  );
}

export default App;
