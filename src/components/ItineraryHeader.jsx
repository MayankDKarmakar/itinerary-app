import React from "react";
import "./ItineraryHeader.css";

const ItineraryHeader = ({ onDownload }) => {
  return (
    <header className="app-header">
      <div className="header-left">
        <div className="logo">V</div>
        <div>
          <div className="header-title">Vigovia</div>
          <div className="header-sub">Plan. Pack. Go.</div>
        </div>
      </div>

      <div className="header-right">
        <div className="header-topic">Itinerary PDF — Final</div>
        <div className="header-note">Fill form → Preview → Download PDF</div>
      </div>
    </header>
  );
};

export default ItineraryHeader;
