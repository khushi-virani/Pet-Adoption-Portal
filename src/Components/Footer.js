import { Link } from "react-router-dom";
import React from "react";
import "./style.css";

const Footer=()=> {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Left */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center footer-logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                alt="Logo"
                width="50"
                height="50"
                className="me-2"
              />
              <div>
                <h5 className="mb-0">Petzee</h5>
                <small style={{ color: "#f1c40f" }}>LOVE AWAITS HERE</small>
              </div>
            </div>
            <p className="footer-text mt-3">
              Join us in building a compassionate world where every pet is
              valued, nurtured, and finds a place to call their forever home.
            </p>
          </div>

          {/* Center */}
          <div className="col-md-4 d-flex justify-content-around mb-4 mb-md-0">
            <div>
              <h5>NAVIGATION</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/Gallery" className="text-light text-decoration-none">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="text-light text-decoration-none">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-light text-decoration-none">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="col-md-4">
            <h5>CONTACT</h5>
            <p className="contact-info">
              <i className="bi bi-telephone-fill"></i> +1 (234) 567 89 00
            </p>
            <p className="contact-info">
              <i className="bi bi-envelope-fill"></i> petzee.pets@email.com
            </p>
            <p className="contact-info">
              <i className="bi bi-geo-alt-fill"></i> Office in London - 36
              Regent St.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom d-flex justify-content-between mt-4 pt-3 border-top">
          <span>© 2025 Paws & Tails. Created with ❤️</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
