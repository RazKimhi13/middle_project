import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

const Layout = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { loggedUser } = useContext(UserContext);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
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
                <Link to="/ContactUs">contact us</Link>
              </li>
              <li>
                <Link to="/gallery">gallery </Link>
              </li>

              {loggedUser.username && (
                <li>
                  <Link to="/Plan">Plan</Link>
                </li>
              )}

              {loggedUser.username === "raz" && (
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              )}
              {loggedUser.username && (
                <li>
                  <Link to="/myPlannings">My plannings</Link>
                </li>
              )}
          
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
