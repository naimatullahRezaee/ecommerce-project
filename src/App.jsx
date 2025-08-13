import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<h1>Hello World</h1>} />
      </Routes>
    </>
  );
}

export default App;
