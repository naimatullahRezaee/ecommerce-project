import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import CheckOutPage from "./pages/CheckOut/CheckOutPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckOutPage />} />
      </Routes>
    </>
  );
}

export default App;
