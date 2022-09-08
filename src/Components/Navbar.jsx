import "../Styles/Navbar.css";
// import { useAuth } from "../context/auth.context";
import { NavLink, Link } from "react-router-dom";
import BurgerIcon from "./Img/burgerLogo.png";
const Navbar = () => {
  // const { user } = useAuth();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand mx-3">
        <img
          src={BurgerIcon}
          alt="BurgerIcon"
          className="burger-icon"
          style={{ width: 80, height: 80 }}
        ></img>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#burgerHut-nav"
        aria-controls="burgerHut-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="burgerHut-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/menu" className="nav-link">
              Menu <i className="bi bi-book"></i>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/order" className="nav-link">
              Order <i className={"bi bi-bicycle"}></i>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <div className="dropdown-menu" aria-labelledby="dropdown03">
              <NavLink to="/menu" className="nav-link">
                Menu
              </NavLink>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
          {/* {user ? ( */}
          {/* <li className="nav-item">
            <NavLink to="signOut" className="nav-link">
              Sign Out
            </NavLink>
          </li> */}
          {/* ) : ( */}
          <>
            <li className="nav-item">
              <NavLink to="signIn" className="nav-link">
                Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="signUp" className="nav-link">
                Sign Up
              </NavLink>
            </li>
          </>
          {/* )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
