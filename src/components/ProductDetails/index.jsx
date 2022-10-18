import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

import "./ProductDetails.css";

function ProductDetails() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  });

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <div className="container d-flex align-items-center bg-light">
      <div className="product-img">
        <img src={product.image} className="w-100 img-height" />
      </div>

      <div className="text-wrapper">
        <p className="mb-3 fw-bold ">{product.title}</p>
        <p className="mb-4 fw-bold border-bottom border-3 text-danger fst-italic fs-1">
          ${product.price}{" "}
          <span className="text-decoration-line-through text-muted fs-5">
            $1000
          </span>
        </p>
        <p className="mb-5">{product.description}</p>

        <a
          href="#"
          className="btn btn-secondary w-100 fw-bold"
          onClick={addItem}
        >
          Add To Cart
        </a>
      </div>
    </div>
  );
}

export default ProductDetails;
