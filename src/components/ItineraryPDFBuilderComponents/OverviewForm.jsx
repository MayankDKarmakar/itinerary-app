import React from "react";
// import "./OverviewForm.css";
import "./builderCommon.css";

const OverviewForm = ({ data, setData }) => {
  const { travelerName, tripTitle, duration, overview = {} } = data || {};

  const updateTopLevel = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const updateOverview = (key, value) => {
    setData((prev) => ({
      ...prev,
      overview: { ...(prev.overview || {}), [key]: value },
    }));
  };

  return (
    <div className="overview-section">
      <h3 className="section-title">Overview 🎯</h3>

      {/* === Basic Info === */}
      <fieldset className="floating-fieldset">
        <legend>Traveller Name</legend>
        <input
          type="text"
          className="input"
          value={travelerName || ""}
          onChange={(e) => updateTopLevel("travelerName", e.target.value)}
          placeholder="Enter traveller name"
          required
        />
      </fieldset>

      <fieldset className="floating-fieldset">
        <legend>Trip Title</legend>
        <input
          type="text"
          className="input"
          value={tripTitle || ""}
          onChange={(e) => updateTopLevel("tripTitle", e.target.value)}
          placeholder="e.g. Singapore Itinerary"
          required
        />
      </fieldset>

      <fieldset className="floating-fieldset">
        <legend>Duration</legend>
        <input
          type="text"
          className="input"
          value={duration || ""}
          onChange={(e) => updateTopLevel("duration", e.target.value)}
          placeholder="e.g. 4 Days 3 Nights"
        />
      </fieldset>

      <hr className="divider" />

      {/* === Trip Details === */}
      <fieldset className="floating-fieldset">
        <legend>Departure From</legend>
        <input
          type="text"
          className="input"
          value={overview?.departureFrom || ""}
          onChange={(e) => updateOverview("departureFrom", e.target.value)}
          placeholder="e.g. Mumbai"
          required
        />
      </fieldset>

      <div className="row">
        <fieldset className="floating-fieldset">
          <legend>Departure Date</legend>
          <input
            type="date"
            className="input"
            value={overview?.departureDate || ""}
            onChange={(e) => updateOverview("departureDate", e.target.value)}
            required
          />
        </fieldset>

        <fieldset className="floating-fieldset">
          <legend>Arrival Date</legend>
          <input
            type="date"
            className="input"
            value={overview?.arrivalDate || ""}
            onChange={(e) => updateOverview("arrivalDate", e.target.value)}
            required
          />
        </fieldset>
      </div>

      <fieldset className="floating-fieldset">
        <legend>Destination</legend>
        <input
          type="text"
          className="input"
          value={overview?.destination || ""}
          onChange={(e) => updateOverview("destination", e.target.value)}
          placeholder="e.g. Singapore"
          required
        />
      </fieldset>

      <div className="row">
        <fieldset className="floating-fieldset">
          <legend>No. of Travellers</legend>
          <input
            type="number"
            className="input"
            min="1"
            value={overview?.travellers || ""}
            onChange={(e) =>
              updateOverview("travellers", Number(e.target.value))
            }
            placeholder="Enter number of travellers"
            required
          />
        </fieldset>

        <fieldset className="floating-fieldset">
          <legend>Notes (Optional)</legend>
          <input
            type="text"
            className="input"
            value={overview?.notes || ""}
            onChange={(e) => updateOverview("notes", e.target.value)}
            placeholder="Add note if any"
          />
        </fieldset>
      </div>

      {/* Preview */}
      {/* <div className="section-preview">
        <div className="preview-title">Preview</div>
        <div className="preview-row">
          <strong>{travelerName || "—"}</strong> — {tripTitle || "—"} •{" "}
          {duration || "—"}
        </div>
        <div className="preview-row small">
          {overview?.departureFrom || "—"} • {overview?.departureDate || "—"} →{" "}
          {overview?.arrivalDate || "—"} • {overview?.destination || "—"} •{" "}
          {overview?.travellers || "—"} pax
        </div>
      </div> */}
    </div>
  );
};

export default OverviewForm;
