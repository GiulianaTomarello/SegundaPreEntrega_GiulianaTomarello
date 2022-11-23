import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-general">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <h2>Dulceida Bags</h2>
          </Link>
        </li>
        <li>
          <Link to="/category/Carteras">Carteras</Link>
        </li>
        <li>
          <Link to="/category/Billeteras">Billeteras</Link>
        </li>
        <li>
          <Link to="/category/Mochilas">Mochilas</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
