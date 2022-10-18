import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./ProductItem.css";

function ProductItem({ productObj: { title, description, image, price, id } }) {
  const product = {
    title,
    image,
    price,
    id,
  };

  const dispatch = useDispatch();

  const addItem = () => dispatch(addToCart(product));

  return (
    <Card style={{ width: "18rem", marginBottom: "30px" }}>
      <Card.Img variant="top" src={image} style={{ height: "300px" }} />
      <Card.Body style={{ maxHeight: "200px", overflow: "scroll" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="fw-bold fs-3">${price}</Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <Card.Body>
        <Link to={`/details/${id}`} className="me-3">
          Product Details
        </Link>
        <Card.Link href="#" onClick={addItem}>
          Add To Cart
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
