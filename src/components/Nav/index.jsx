import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
              <Link
                class="nav-link"
                aria-current="page"
                to="/"
                activeClassName="is-active"
              >
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/signup" activeClassName="is-active">
                Sign Up
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signin" activeClassName="is-active">
                Sign In
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cart" activeClassName="is-active">
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
