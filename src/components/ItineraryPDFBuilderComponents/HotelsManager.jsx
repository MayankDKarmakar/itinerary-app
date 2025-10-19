import React, { useState } from "react";
import "./builderCommon.css";

// Helper: format ISO date → "DD/MM/YYYY"
const formatHotelDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date)) return dateString;

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

//  Helper: unformat "DD/MM/YYYY" → "YYYY-MM-DD" for <input type="date" />
const unformatHotelDate = (formatted) => {
  if (!formatted.includes("/")) return "";
  const [day, month, year] = formatted.split("/");
  return `${year}-${month}-${day}`;
};

const HotelsManager = ({ hotelBookings = [], setData }) => {
  const [formData, setFormData] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
    nights: "",
    hotelName: "",
  });

  // Add new hotel
  const handleAddHotel = () => {
    const { city, checkIn, checkOut, nights, hotelName } = formData;
    if (!city || !checkIn || !checkOut || !nights || !hotelName) {
      alert("Please fill in all hotel details before adding.");
      return;
    }

    const newHotel = {
      id: crypto.randomUUID(),
      city,
      checkIn,
      checkOut,
      nights: Number(nights),
      hotelName,
    };

    setData((prev) => ({
      ...prev,
      hotelBookings: [...(prev.hotelBookings || []), newHotel],
    }));

    // Reset form
    setFormData({
      city: "",
      checkIn: "",
      checkOut: "",
      nights: "",
      hotelName: "",
    });
  };

  // Delete hotel
  const handleDeleteHotel = (id) => {
    setData((prev) => ({
      ...prev,
      hotelBookings: prev.hotelBookings.filter((h) => h.id !== id),
    }));
  };

  // Handle field changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="builder-section">
      <h3 className="section-title">Hotels Manager 🏨</h3>

      {/* === Add Hotel Form === */}
      <fieldset className="floating-fieldset">
        <legend>City</legend>
        <input
          type="text"
          className="input"
          placeholder="e.g. Singapore"
          value={formData.city}
          onChange={(e) => handleChange("city", e.target.value)}
          required
        />
      </fieldset>

      <div className="row">
        <fieldset className="floating-fieldset" style={{ flex: 1 }}>
          <legend>Check In</legend>
          <input
            type="date"
            className="input"
            value={unformatHotelDate(formData.checkIn)}
            onChange={(e) =>
              handleChange("checkIn", formatHotelDate(e.target.value))
            }
            required
          />
        </fieldset>

        <fieldset className="floating-fieldset" style={{ flex: 1 }}>
          <legend>Check Out</legend>
          <input
            type="date"
            className="input"
            value={unformatHotelDate(formData.checkOut)}
            onChange={(e) =>
              handleChange("checkOut", formatHotelDate(e.target.value))
            }
            required
          />
        </fieldset>
      </div>

      <fieldset className="floating-fieldset">
        <legend>Nights</legend>
        <input
          type="number"
          className="input"
          placeholder="e.g. 2"
          min="1"
          value={formData.nights}
          onChange={(e) => handleChange("nights", e.target.value)}
          required
        />
      </fieldset>

      <fieldset className="floating-fieldset">
        <legend>Hotel Name</legend>
        <input
          type="text"
          className="input"
          placeholder="e.g. Super Townhouse Oak Vashi Formerly Blue Diamond"
          value={formData.hotelName}
          onChange={(e) => handleChange("hotelName", e.target.value)}
          required
        />
      </fieldset>

      <button type="button" className="primary-btn" onClick={handleAddHotel}>
        + Add Hotel
      </button>

      {/* === Hotels List === */}
      <div className="days-list">
        {hotelBookings.length === 0 ? (
          <p className="no-data">No hotels added yet.</p>
        ) : (
          hotelBookings.map((hotel, index) => (
            <div key={hotel.id || index} className="card">
              <div className="card-header">
                <h4>
                  🏨 Hotel {index + 1}: {hotel.hotelName}
                </h4>
              </div>

              <div className="card-body">
                <p>
                  <strong>City:</strong> {hotel.city}
                </p>
                <p>
                  <strong>Check-In:</strong> {hotel.checkIn}
                </p>
                <p>
                  <strong>Check-Out:</strong> {hotel.checkOut}
                </p>
                <p>
                  <strong>Nights:</strong> {hotel.nights}
                </p>
              </div>

              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteHotel(hotel.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HotelsManager;
