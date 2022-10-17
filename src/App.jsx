import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/Counter";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";

function App() {
  const [cartCounter, setCartCounter] = useState(0);

  const increaseCartCounter = () => {
    console.log("uhadshoa9ih");
    setCartCounter((count) => count + 1);
  };
  const decreaseCartCounter = () =>
    cartCounter > 0 && setCartCounter(--cartCounter);
  return (
    <BrowserRouter>
      <Nav cartCount={cartCounter}></Nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartCount={cartCounter}
              incrementCount={increaseCartCounter}
              decrementCount={decreaseCartCounter}
            />
          }
        />
        <Route path="/counter" element={<Counter />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
