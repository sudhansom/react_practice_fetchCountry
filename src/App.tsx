import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import "./App.css";
import DetailPage from "./components/DetailPage";
import CartPage from "./components/CartPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/detail/:countryName"
          element={<DetailPage></DetailPage>}
        ></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
