import React from "react";
import "./FlightSummaryPreview.css";

const FlightSummaryPreview = ({ data, setData }) => {
  const handleDeleteFlight = (id) => {
    setData((prev) => ({
      ...prev,
      flights: (prev.flights || []).filter((flight) => flight.id !== id),
    }));
  };

  return (
    <section className="flight-summary-section">
      {/* === Title === */}
      <div className="title-row">
        <h3 className="title">
          Flight <span className="title-highlight">Summary</span>
        </h3>
      </div>

      {/* === Flight Cards === */}
      <div className="flight-cards">
        {data.flights?.length ? (
          data.flights.map((flight) => (
            <div className="flight-card" key={flight.id}>
              {/* Left box — Date */}
              <div className="card-left">
                <span className="flight-date">{flight.date}</span>
                <div className="triangle" />
              </div>

              {/* Right box — Details */}
              <div className="card-right">
                <p className="flight-details">
                  <strong>Fly {flight.airline}</strong> From{" "}
                  <span className="route">{flight.route.from}</span> To{" "}
                  <span className="route">{flight.route.to}</span>.
                </p>
              </div>

              {/* Delete Button */}
              <button
                className="dele-btn"
                onClick={() => handleDeleteFlight(flight.id)}
                title="Delete flight"
              >
                ✕
              </button>
            </div>
          ))
        ) : (
          <p className="no-records">No flights added yet.</p>
        )}
      </div>

      {/* Note */}
      <p className="note-text">
        Note: All Flights Include Meals, Seat Choice (Excluding XL), And
        20kg/25Kg Checked Baggage.
      </p>
    </section>
  );
};

export default FlightSummaryPreview;
