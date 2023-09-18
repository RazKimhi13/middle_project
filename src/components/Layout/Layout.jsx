import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

const Layout = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            {/* <img src="./src/assets/icons/website-icon.png" alt="navbar-icon" /> */}
            <Logo />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">register</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/ContactUs">contact us</Link>
              </li>
              <li>
                <Link to="/gallery">gallery </Link>
              </li>

              <li>
                <Link to="/Plan">Plan</Link>
              </li>
              <li>
                <Link to="/Payment">Payment</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
