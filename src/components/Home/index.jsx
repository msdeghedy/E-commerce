import { useEffect } from "react";
import { useState } from "react";
import ProductItem from "../ProductItem";
import Spinner from "react-bootstrap/Spinner";
import { getProducts } from "../../redux/productsSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const products = useSelector((store) => store.productsSlice.productsList);
  console.log(products);
  const loadingSpinner = useSelector((store) => store.productsSlice.loading);
  if (loadingSpinner) {
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
          <div key={`${product.id}`} className="w-25 p-2">
            <ProductItem productObj={product} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
