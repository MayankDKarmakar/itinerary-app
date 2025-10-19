import React from "react";
import "./OverviewPreview.css";
import vigoviaLogo from "../../assets/vigoviaLogo.png";

const OverviewPreview = ({ data }) => {
  const overview = data?.overview || {};

  return (
    <section className="overview-container">
      {/* Logo */}
      <div className="overview-logo">
        <img src={vigoviaLogo} alt="Vigovia Logo" />
      </div>

      {/* Banner */}
      <div className="banner-wrapper">
        <div className="banner-overlay">
          <h2 className="greeting">Hi, {data.travelerName || "Traveler"}!</h2>
          <h1 className="trip-title">{data.tripTitle || "Trip Itinerary"}</h1>
          <p className="duration">{data.duration || "Duration"}</p>
        </div>
      </div>

      {/* Info Box */}
      <div className="info-box">
        <div className="info-item">
          <p className="label">Departure From :</p>
          <p className="value">{overview.departureFrom || "—"}</p>
        </div>
        <div className="info-item">
          <p className="label">Departure :</p>
          <p className="value">{overview.departureDate || "—"}</p>
        </div>
        <div className="info-item">
          <p className="label">Arrival :</p>
          <p className="value">{overview.arrivalDate || "—"}</p>
        </div>
        <div className="info-item">
          <p className="label">Destination :</p>
          <p className="value">{overview.destination || "—"}</p>
        </div>
        <div className="info-item">
          <p className="label">No. Of Travellers :</p>
          <p className="value">{overview.travellers || "—"}</p>
        </div>
      </div>
    </section>
  );
};

export default OverviewPreview;
