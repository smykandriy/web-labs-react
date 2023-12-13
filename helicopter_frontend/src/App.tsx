import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Header } from "./components/common/";
import Home from "./components/pages/Home/Home";
import { Footer } from "./components/common/";
import Catalog from "./components/pages/Catalog/Catalog";
import { ShoppingCart } from "./components/pages/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/" element={<Home />} />
          <Route path="/catalog/" element={<Catalog />} />
          <Route path="/cart/" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
