import { Routes, Route } from "react-router";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import HomePage from "./pages/Home/HomePage";
import CheckOutPage from "./pages/CheckOut/CheckOutPage";
import OrdersPage from "./pages/Orders/OrdersPage";
import TrackingPage from "./pages/Tracking/TrackingPage";

function App() {
  const [cart, setCart] = useState([]);
  const fetchCartData = async () => {
    const response = await axios.get("/api/cart-items?expand=product");

    setCart(response.data);
  };
  useEffect(() => {
    fetchCartData();
  }, []);
  return (
    <>
      <Routes>
        <Route
          index
          element={<HomePage cart={cart} fetchCartData={fetchCartData} />}
        />
        <Route path="/checkout" element={<CheckOutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage cart={cart} />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
