import React, { useState } from "react";
import "./builderCommon.css";

// Converts "2025-01-10" → "Thu 10 Jan'25"
const formatFlightDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date)) return dateString;

  const dayName = date.toLocaleDateString("en-GB", { weekday: "short" });
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleDateString("en-GB", { month: "short" });
  const year = String(date.getFullYear()).slice(-2);

  return `${dayName} ${day} ${month}'${year}`;
};

const FlightsManager = ({ flights = [], setData }) => {
  const [formData, setFormData] = useState({
    date: "",
    airline: "",
    route: { from: "", to: "" },
  });

  // Add Flight
  const handleAddFlight = () => {
    if (
      !formData.date ||
      !formData.airline ||
      !formData.route.from ||
      !formData.route.to
    ) {
      alert("Please fill all flight details before adding.");
      return;
    }

    const newFlight = {
      id: crypto.randomUUID(),
      ...formData,
    };

    setData((prev) => ({
      ...prev,
      flights: [...(prev.flights || []), newFlight],
    }));

    // Reset form
    setFormData({
      date: "",
      airline: "",
      route: { from: "", to: "" },
    });
  };

  // Handle input changes
  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle route input changes
  const handleRouteChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      route: { ...prev.route, [key]: value },
    }));
  };

  // Delete Flight
  //   const handleDeleteFlight = (id) => {
  //     setData((prev) => ({
  //       ...prev,
  //       flights: prev.flights.filter((f) => f.id !== id),
  //     }));
  //   };

  return (
    <div className="builder-section">
      <h3 className="section-title">Flights Manager ✈️</h3>

      {/* === Add Flight Form === */}
      <fieldset className="floating-fieldset">
        <legend>Date</legend>
        <input
          type="date"
          className="input"
          value={
            formData.date
              ? (() => {
                  // try to reverse format back to ISO for date picker
                  const parts = formData.date.split(" ");
                  if (parts.length >= 3) {
                    const day = parts[1];
                    const monthShort = parts[2].slice(0, 3);
                    const year = "20" + parts[2].slice(-2);
                    const months = [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ];
                    const monthIndex = months.indexOf(monthShort);
                    if (monthIndex >= 0) {
                      const d = new Date(year, monthIndex, day);
                      return d.toISOString().split("T")[0];
                    }
                  }
                  return "";
                })()
              : ""
          }
          onChange={(e) =>
            handleFieldChange("date", formatFlightDate(e.target.value))
          }
          required
        />
      </fieldset>

      <fieldset className="floating-fieldset">
        <legend>Airline</legend>
        <input
          type="text"
          className="input"
          placeholder="e.g. Air India (AI-123)"
          value={formData.airline}
          onChange={(e) => handleFieldChange("airline", e.target.value)}
          required
        />
      </fieldset>

      {/* Route Section */}
      <div className="row">
        <fieldset className="floating-fieldset" style={{ flex: 1 }}>
          <legend>From</legend>
          <input
            type="text"
            className="input"
            placeholder="e.g. Delhi (DEL)"
            value={formData.route.from}
            onChange={(e) => handleRouteChange("from", e.target.value)}
            required
          />
        </fieldset>

        <fieldset className="floating-fieldset" style={{ flex: 1 }}>
          <legend>To</legend>
          <input
            type="text"
            className="input"
            placeholder="e.g. Singapore (SIN)"
            value={formData.route.to}
            onChange={(e) => handleRouteChange("to", e.target.value)}
            required
          />
        </fieldset>
      </div>

      <button type="button" className="primary-btn" onClick={handleAddFlight}>
        + Add Flight
      </button>

      {/* === Flights List === */}
      {/* <div className="days-list">
        {flights.length === 0 ? (
          <p className="no-data">No flights added yet.</p>
        ) : (
          flights.map((flight, index) => (
            <div key={flight.id || index} className="card">
              <div className="card-header">
                <h4>
                  ✈️ Flight {index + 1}: {flight.airline}
                </h4>
                <p className="card-date">{flight.date}</p>
              </div>

              <div className="card-body">
                <p>
                  <strong>From:</strong> {flight.route.from || "—"}
                </p>
                <p>
                  <strong>To:</strong> {flight.route.to || "—"}
                </p>
              </div>

              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteFlight(flight.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div> */}
    </div>
  );
};

export default FlightsManager;
