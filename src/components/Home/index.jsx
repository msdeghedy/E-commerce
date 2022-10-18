import { useEffect } from "react";
import { useState } from "react";
import ProductItem from "../ProductItem";
import Spinner from "react-bootstrap/Spinner";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  if (!products) {
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="d-flex flex-wrap justify-content-between container">
      {products.map((product) => {
        return (
          <div key={`${product.id}`}>
            <ProductItem productObj={product} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
