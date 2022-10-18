import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import "./CartItem.css";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => dispatch(removeFromCart(product));
  return (
    <div className="container d-flex  bg-light mb-3">
      <img src={product.image} className="product-pic" />

      <div className="text-wrapper">
        <p className="mb-3 fw-bold ">{product.title}</p>
        <p className="mb-4 fw-bold border-bottom border-3 text-danger fst-italic fs-1">
          ${product.price}{" "}
          <span className="text-decoration-line-through text-muted fs-5">
            $1000
          </span>
        </p>
      </div>

      <button
        type="button"
        className="btn btn-danger  d-block"
        onClick={handleRemoveItem}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
