import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => dispatch(removeFromCart(product));
  return (
    <tr>
      <td className="border w-25">
        <img src={product.image} className="w-25" />
      </td>
      <td className="border fw-bold text-center fs-3">${product.price}</td>
      <td className="border">
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleRemoveItem}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
