import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Header } from "./components/common/";
import Home from "./components/pages/Home/Home";
import { Footer } from "./components/common/";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
