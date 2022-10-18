import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Nav.css";
import { FaShoppingCart } from "react-icons/fa";

function Nav() {
  let cartCount = useSelector((state) => state.cartSlice.cartCounter);

  return (
    <nav class="navbar navbar-expand-lg  navbar-light bg-light mb-5">
      <div class="container">
        <Link class="navbar-brand fw-bold" href="#">
          E - COMMERCE
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/counter">
                Counter
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cart">
                <FaShoppingCart /> [{cartCount}]
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
