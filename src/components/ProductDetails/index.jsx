import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductDetails() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  });

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
    <Card
      style={{ width: "18rem", marginBottom: "30px" }}
      className="container d-flex justify-content-center"
    >
      <Card.Img variant="top" src={product.image} style={{ height: "300px" }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text className="fw-bold fs-3">$ {product.price}</Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">Add To Cart</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProductDetails;
