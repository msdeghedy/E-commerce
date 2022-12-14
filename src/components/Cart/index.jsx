import { useDispatch, useSelector } from "react-redux";
import CartItem from "./../CartItem/index";
import "./Cart.css";

function Cart() {
  const productList = useSelector((state) => state.cartSlice.cartItems);
  const totalPrice = productList.reduce((acc, cur) => (acc += cur.price), 0);
  if (productList.length === 0) {
    return (
      <div className="container empty-cart-height d-flex justify-content-center align-items-center fs-1 fw-bold text-danger">
        <img src={require("../../assets/imgs/empty-cart.gif")} />
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="border-bottom mb-4 d-flex align-items-end">
        Shopping Cart{" "}
        <span className="ms-auto d-block fs-5">Total Price: ${totalPrice}</span>
      </h1>
      {productList.map((item) => {
        return <CartItem product={item} />;
      })}
    </div>
  );
}

export default Cart;
