import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Khata from "./pages/Khata";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav style={{ background: "#2c3e50", padding: "10px" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Dashboard</Link>
        <Link to="/products" style={{ color: "#fff", marginRight: "15px" }}>Products</Link>
        <Link to="/sales" style={{ color: "#fff", marginRight: "15px" }}>Sales</Link>
        <Link to="/khata" style={{ color: "#fff" }}>Khata</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/khata" element={<Khata />} />
        </Routes>
      </div>
    </div>
  );
}
