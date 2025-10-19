import React, { useState } from "react";
// import "./DaysManager.css";
import "./builderCommon.css";

const DaysManager = ({ days = [], setData }) => {
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    morning: [""],
    afternoon: [""],
    evening: [""],
  });

  // Add new day
  const handleAddDay = (e) => {
    if (!formData.date || !formData.title.trim()) return;

    const newDay = {
      id: days.length + 1,
      ...formData,
    };

    setData((prev) => ({
      ...prev,
      days: [...(prev.days || []), newDay],
    }));

    setFormData({
      date: "",
      title: "",
      morning: [""],
      afternoon: [""],
      evening: [""],
    });
  };

  console.log("Add day data", days);
  // Remove a day
  const handleDeleteDay = (id) => {
    console.log("Day id", id);
    setData((prev) => ({
      ...prev,
      days: prev.days.filter((d) => d.id !== id),
    }));
  };

  // Handle nested field updates
  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle activity changes
  const handleActivityChange = (section, index, value) => {
    setFormData((prev) => {
      const updated = [...prev[section]];
      updated[index] = value;
      return { ...prev, [section]: updated };
    });
  };

  // Add new activity row
  const addActivityRow = (section) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], ""],
    }));
  };

  return (
    <div className="builder-section">
      <h3 className="section-title">Days Manager</h3>

      {/* === Add Day Form === */}
      <div className="add-day-form">
        <fieldset className="floating-fieldset">
          <legend>Date</legend>
          <input
            type="date"
            className="input"
            value={formData.date}
            onChange={(e) => handleFieldChange("date", e.target.value)}
            required
          />
        </fieldset>

        <fieldset className="floating-fieldset">
          <legend>Title</legend>
          <input
            type="text"
            className="input"
            placeholder="e.g. Arrival & City Exploration"
            value={formData.title}
            onChange={(e) => handleFieldChange("title", e.target.value)}
            required
          />
        </fieldset>

        {/* Morning Activities */}
        <fieldset className="floating-fieldset">
          <legend>Morning Activities</legend>
          {formData.morning.map((item, idx) => (
            <input
              key={idx}
              type="text"
              className="input activity-input"
              placeholder="Add morning activity"
              value={item}
              onChange={(e) =>
                handleActivityChange("morning", idx, e.target.value)
              }
            />
          ))}
          <button
            type="button"
            className="small-btn"
            onClick={() => addActivityRow("morning")}
          >
            + Add Morning Activity
          </button>
        </fieldset>

        {/* Afternoon Activities */}
        <fieldset className="floating-fieldset">
          <legend>Afternoon Activities</legend>
          {formData.afternoon.map((item, idx) => (
            <input
              key={idx}
              type="text"
              className="input activity-input"
              placeholder="Add afternoon activity"
              value={item}
              onChange={(e) =>
                handleActivityChange("afternoon", idx, e.target.value)
              }
            />
          ))}
          <button
            type="button"
            className="small-btn"
            onClick={() => addActivityRow("afternoon")}
          >
            + Add Afternoon Activity
          </button>
        </fieldset>

        {/* Evening Activities */}
        <fieldset className="floating-fieldset">
          <legend>Evening Activities</legend>
          {formData.evening.map((item, idx) => (
            <input
              key={idx}
              type="text"
              className="input activity-input"
              placeholder="Add evening activity"
              value={item}
              onChange={(e) =>
                handleActivityChange("evening", idx, e.target.value)
              }
            />
          ))}
          <button
            type="button"
            className="small-btn"
            onClick={() => addActivityRow("evening")}
          >
            + Add Evening Activity
          </button>
        </fieldset>

        <button type="button" className="primary-btn" onClick={handleAddDay}>
          + Add Day
        </button>
      </div>

      {/* === Days List === */}
      <div className="days-list">
        {days.length === 0 ? (
          <p className="no-days">No days added yet.</p>
        ) : (
          days.map((day, index) => (
            <div key={day.id} className="card">
              <div className="day-card-header">
                <h4>
                  Day {index + 1}: {day.title}
                </h4>
                <p className="day-date">{day.date}</p>
              </div>

              <div className="day-card-body">
                <p>
                  <strong>Morning:</strong>{" "}
                  {day.morning.filter(Boolean).join(", ") || "—"}
                </p>
                <p>
                  <strong>Afternoon:</strong>{" "}
                  {day.afternoon.filter(Boolean).join(", ") || "—"}
                </p>
                <p>
                  <strong>Evening:</strong>{" "}
                  {day.evening.filter(Boolean).join(", ") || "—"}
                </p>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleDeleteDay(day.id)}
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

export default DaysManager;
