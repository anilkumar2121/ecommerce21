import React from "react";
import "./Footer.css";
import facebook from "../Assets/facebook.jpg";
import instagram from "../asss/Assets/instagram_icon.png";
import whatsapp from "../asss/Assets/whatsapp_icon.png";
 

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <img src={instagram} alt="" height="50px" width="50px" />
          <p>SHOOPER</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={whatsapp} alt="" width="30px" height="30px" />
          </div>
          <div className="footer-icons-container">
            <img src={instagram} alt="" width="30px" height="30px" />
          </div>
          <div className="footer-icons-container">
            <img src={facebook} alt="" width="30px" height="30px" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>copyRight @2023- All Right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
