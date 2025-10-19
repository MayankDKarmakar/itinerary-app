import React from "react";
import "./FooterSection.css";
import logo from "../assets/vigoviaLogo.png";

const FooterSection = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left side - Company Info */}
        <div className="footer-left">
          <p className="footer-company-name">Vigovia Tech Pvt. Ltd</p>
          <p className="footer-address">
            Registered Office: Hd-109 Cinnabar Hills,
            <br />
            Links Business Park, Karnataka, India.
          </p>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="footer-middle">
          <p>
            <strong>Phone:</strong> +91-9504061112
          </p>
          <p>
            <strong>Email ID:</strong> Utkarsh@Vigovia.Com
          </p>
          <p>
            <strong>CIN:</strong> U79110KA2024PTC191890
          </p>
        </div>

        {/* Right Section - Logo */}
        <div className="footer-right">
          <img src={logo} alt="Vigovia Logo" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
