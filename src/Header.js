import "./Header.css";
import { IoLogOutOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Header(props) {
  return (
    <nav class="navbar navbar-light bg-light justify-content-center">
      <a class="navbar-brand" href="#">
        <img src="./beats.png" width="60" height="60" alt="brand"></img>
      </a>

      <div class="container">
        {/* <!-- Links --> */}
        <ul class="navbar-nav">
          <li class="nav-item">
            <span class="nav-link">Shop</span>
          </li>
          <li class="nav-item">
            <span class="nav-link">Support</span>
          </li>
          <li class="search">
            <FaMagnifyingGlass />
          </li>
        </ul>
      </div>

      <div class="secondnav">
        <p class="text">
          Fast and Free Delivery
          <IoLogOutOutline />
        </p>
      </div>
    </nav>
  );
}

export default Header;
