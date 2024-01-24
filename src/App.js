import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import LoginSignUp from "./pages/LoginSignUp";
import menswear from "./components/Assets/mensbanner.jpg";
import womenswear from "./components/Assets/womensbanner.jpg";
import kidswear from "./components/Assets/kidsbanner.jpg";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={menswear} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={womenswear} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kidswear} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
