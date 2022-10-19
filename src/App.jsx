import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/Counter";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import Signup from "./components/Auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
