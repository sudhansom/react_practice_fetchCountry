import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import "./App.css";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/detail" element={<DetailPage></DetailPage>}></Route>
        <Route exact path="/cart" element={<CartPage></CartPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
