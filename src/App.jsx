import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
