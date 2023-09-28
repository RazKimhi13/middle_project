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
      <div>
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
                  <Link to="/ContactUs">contact us</Link>
                </li>
                <li>
                  <Link to="/gallery">gallery </Link>
                </li>


                {/* {loggedUser.username === "raz" && (
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              )} */}
                {loggedUser.username && (
                  <li>
                    <Link to="/myPlannings">My plans</Link>
                  </li>
                )}
                {!loggedUser.username && (
                  <li>
                    <Link to="/Login">Login</Link>
                  </li>
                )}
                {!loggedUser.username && (
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>

        <Outlet />
        <br />
        <br />
        <br />
        <div className="footer">
          <hr />

          <div className="lists">
            <div className="sideLogo">
              <div>
                <img src=".\assets\icons\website-icon2.png" alt="" />
              </div>
            </div>
            <div className="helpList">
              <h3>Help</h3>
              <div>
                <Link to="ContactUs" className="footerLink">
                  contact us
                </Link>
              </div>
              <div>support</div>
              <div>terms of use</div>
            </div>
            <div className="accountList">
              <h3>Account</h3>

              <div ><Link to="register" className='footerLink'>register</Link></div>
              <div ><Link to="Login" className='footerLink'>login</Link></div>

            </div>
            <br />
            <div className="socials">
              <div>
                <a href="https://www.instagram.com/eden_milo/">
                  <img
                    className="instegramLOGO"
                    src=".\assets\instegramLOGO.png"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/">
                  <img
                    className="facebookLOGO"
                    src=".\assets\facebookLOGO.png"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/eden-milo-192083293/">
                  <img
                    className="linkdinLOGO"
                    src=".\assets\linkdinLOGO.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
