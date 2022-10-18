import { useDispatch, useSelector } from "react-redux";
import CartItem from "./../CartItem/index";

function Cart() {
  const productList = useSelector((state) => state.cartSlice.cartItems);

  if (productList.length === 0) {
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center fs-1 fw-bold text-danger">
        Empty Cart!
      </div>
    );
  }

  return (
    <div className="container">
      <table>
        <tr>
          <th className="border">Product image</th>
          <th className="border">Product price</th>
          <th className="border">Remove Item</th>
        </tr>
        {productList.map((item) => {
          return <CartItem product={item} />;
        })}
      </table>
    </div>
  );
}

export default Cart;
