import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import PrivateRoute from "./pages/Authentication/PrivateRoute";
import Shipment from "./components/Dashboard/Shipment";
import Checkout from "./components/Dashboard/Checkout";
import ShipmentProvider from "./contexts/ShipmentProvider/ShipmentProvider";

function App() {
  return (
    <AuthProvider>
      <ServiceProvider>
        <ShipmentProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route path="services/:id" element={<ServicePage />} />
            <Route path="/addService" element={<AddService />}></Route>
            <Route
              path="/dashboard/checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/shipment" element={<Shipment />}></Route>
            <Route path="/addReview" element={<AddReview />}></Route>
            <Route path="/manageService" element={<ManageServices />}></Route>
            <Route path="/orderList" element={<OrderList />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
          </Routes>
        </ShipmentProvider>
      </ServiceProvider>
    </AuthProvider>
  );
}

export default App;
