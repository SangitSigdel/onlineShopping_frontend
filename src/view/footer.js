import React from "react";
import { Link } from "react-router-dom";

import "./css/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <Link to="/">about</Link>
                </li>
                <li>
                  <Link to="/">our services</Link>
                </li>
                <li>
                  <Link to="/">privacy policy</Link>
                </li>
                <li>
                  <Link to="/">affilated program</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">shipping</Link>
                </li>
                <li>
                  <Link to="/">returns</Link>
                </li>
                <li>
                  <Link to="/">order status</Link>
                </li>
                <li>
                  <Link to="/">payment options</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <Link to="/">mobiles</Link>
                </li>
                <li>
                  <Link to="/">laptops</Link>
                </li>
                <li>
                  <Link to="/">house hold</Link>
                </li>
                <li>
                  <Link to="/">medical</Link>
                </li>
                <li>
                  <Link to="/">payment options</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
