import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/Dashboard/AddProduct";
import Sidebar from "./components/Dashboard/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sidebar" element={<DashboardPage />} />
      <Route path="services/:id" element={<ServicePage />} />
      <Route path="/addProduct" element={<AddProduct />}></Route>
    </Routes>
  );
}

export default App;
