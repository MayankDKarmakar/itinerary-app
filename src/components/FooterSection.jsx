// import React from "react";
// import "./FooterSection.css";

// const FooterSection = () => {
//   return (
//     <footer className="builder-footer">
//       <div className="footer-left">
//         <div className="footer-logo-placeholder">LOGO</div>
//         <div className="footer-info">
//           <p className="footer-company">Mantram Tours & Travels</p>
//           <p className="footer-contact">
//             📞 +91 99999 88888 | ✉️ info@mantram.com
//           </p>
//           <p className="footer-address">
//             302, Orchid Complex, MG Road, Pune - 411001, Maharashtra
//           </p>
//         </div>
//       </div>

//       <div className="footer-right">
//         <p className="footer-right-text">
//           © {new Date().getFullYear()} Mantram Tours & Travels. All rights
//           reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;

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
