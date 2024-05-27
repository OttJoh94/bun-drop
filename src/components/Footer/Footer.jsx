import React from "react";
import "./Footer.css";
import logo from "../../assets/icons/logo-color.png";
import facebook from "../../assets/icons/facebook_icon.png";
import linkedin from "../../assets/icons/linkedin_icon.png";
import twitter from "../../assets/icons/twitter_icon.png";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-contents">
        <div className="footer-left">
          <img src={logo} alt="" className="footer-logo" />
          <div className="footer-social-icons">
            <img src={facebook} alt="" className="social-icon" />
            <img src={linkedin} alt="" className="social-icon" />
            <img src={twitter} alt="" className="social-icon" />
          </div>
        </div>
        <div className="footer-middle">
          <h3 className="footer-title">Integritetspolicy</h3>
          <div className="footer-details">
            <p>Alla beställningar görs på egen risk</p>
            <p>Bun Drop tar inget ansvar för burgare fallna på huvudet</p>
          </div>
        </div>
        <div className="footer-right">
          <h3 className="footer-title">Kontakt</h3>
          <p className="footer-contact">+46 40 123 45</p>
          <p className="footer-contact">contact@bundrop.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <hr className="footer-hr" />
        <p className="footer-copyright">
          Copyright 2024 © BunDrop.com - All Right Reserverd.
        </p>
      </div>
    </div>
  );
}

export default Footer;
