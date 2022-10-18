import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import "./CartItem.css";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => dispatch(removeFromCart(product));
  return (
    // <tr className="text-center">
    //   <td className="border w-25">
    //     <img src={product.image} className="w-25" />
    //   </td>
    //   <td className="border fw-bold text-center fs-3">${product.price}</td>
    //   <td className="border w-25">
    //     <button
    //       type="button"
    //       className="btn btn-danger w-100 h-100 d-block"
    //       onClick={handleRemoveItem}
    //     >
    //       Remove
    //     </button>
    //   </td>
    // </tr>

    <div className="container d-flex align-items-center bg-light mb-3">
      <img src={product.image} className="product-pic" />

      <div className="text-wrapper">
        <p className="mb-3 fw-bold ">{product.title}</p>
        <p className="mb-4 fw-bold border-bottom border-3 text-danger fst-italic fs-1">
          ${product.price}{" "}
          <span className="text-decoration-line-through text-muted fs-5">
            $1000
          </span>
        </p>
        <button
          type="button"
          className="btn btn-danger  d-block"
          onClick={handleRemoveItem}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
