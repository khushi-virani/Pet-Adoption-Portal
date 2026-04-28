
import { Link } from "react-router-dom";
import "./Navbar.css";
import { clear } from "@testing-library/user-event/dist/clear";


const Navbar = () => {
  function handleLogout() {
  // localStorage.removeItem("token");
  localStorage.clear();
  window.location.href = "/login";
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/Home">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <div>
            Petzee
            <small>LOVE AWAITS HERE</small>
          </div>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          {/* <div className="social-icons d-flex">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Twitter / X">
              <i className="fab fa-twitter"></i>
            </a>
          </div> */}
          <button type="submit" className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

