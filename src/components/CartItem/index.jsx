import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => dispatch(removeFromCart(product));
  return (
    <tr className="text-center">
      <td className="border w-25">
        <img src={product.image} className="w-25" />
      </td>
      <td className="border fw-bold text-center fs-3">${product.price}</td>
      <td className="border w-25">
        <button
          type="button"
          className="btn btn-danger w-100 h-100 d-block"
          onClick={handleRemoveItem}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
