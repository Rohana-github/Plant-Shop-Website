import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopAll from "./pages/ShopAll";
import NewArrivalsAll from "./pages/NewArrivalsAll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/new-arrivals" element={<NewArrivalsAll />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;