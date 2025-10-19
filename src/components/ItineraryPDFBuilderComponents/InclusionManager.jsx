import React, { useState } from "react";
import "./builderCommon.css";

const InclusionManager = ({ inclusionSummaryData = [], setData }) => {
  const [formData, setFormData] = useState({
    category: "",
    count: "",
    details: "",
    status: "",
  });

  // Add new inclusion
  const handleAddInclusion = () => {
    const { category, count, details, status } = formData;
    if (!category || !count || !details || !status) {
      alert("Please fill all fields before adding an inclusion.");
      return;
    }

    const newInclusion = {
      id: Date.now(),
      category,
      count: Number(count),
      details,
      status,
    };

    setData((prev) => ({
      ...prev,
      inclusionSummaryData: [
        ...(prev.inclusionSummaryData || []),
        newInclusion,
      ],
    }));

    setFormData({
      category: "",
      count: "",
      details: "",
      status: "",
    });
  };

  //  Delete inclusion
  const handleDeleteInclusion = (id) => {
    setData((prev) => ({
      ...prev,
      inclusionSummaryData: prev.inclusionSummaryData.filter(
        (i) => i.id !== id
      ),
    }));
  };

  //  Handle input change
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="builder-section">
      <h3 className="section-title">Inclusion Summary 🧾</h3>

      {/* === Input Form === */}
      <fieldset className="floating-fieldset">
        <legend>Category</legend>
        <input
          type="text"
          className="input"
          placeholder="e.g. Flight, Hotel, Transfer"
          value={formData.category}
          onChange={(e) => handleChange("category", e.target.value)}
          required
        />
      </fieldset>

      <fieldset className="floating-fieldset">
        <legend>Count</legend>
        <input
          type="number"
          className="input"
          placeholder="e.g. 2"
          min="1"
          value={formData.count}
          onChange={(e) => handleChange("count", e.target.value)}
          required
        />
      </fieldset>

      <fieldset className="floating-fieldset">
        <legend>Details</legend>
        <textarea
          className="input"
          rows={3}
          placeholder="Enter inclusion details here..."
          value={formData.details}
          onChange={(e) => handleChange("details", e.target.value)}
          required
        />
      </fieldset>

      <fieldset className="floating-fieldset">
        <legend>Status</legend>
        <select
          className="input"
          value={formData.status}
          onChange={(e) => handleChange("status", e.target.value)}
          required
        >
          <option value="">Select Status</option>
          <option value="Included">Included</option>
          <option value="Awaiting Confirmation">Awaiting Confirmation</option>
          <option value="Excluded">Excluded</option>
        </select>
      </fieldset>

      <button
        type="button"
        className="primary-btn"
        onClick={handleAddInclusion}
      >
        + Add Inclusion
      </button>

      {/* === Inclusion List === */}
      <div className="days-list">
        {inclusionSummaryData.length === 0 ? (
          <p className="no-data">No inclusions added yet.</p>
        ) : (
          inclusionSummaryData.map((item, index) => (
            <div key={item.id || index} className="card">
              <div className="card-header">
                <h4>
                  🧾 Inclusion {index + 1}: {item.category}
                </h4>
              </div>

              <div className="card-body">
                <p>
                  <strong>Count:</strong> {item.count}
                </p>
                <p>
                  <strong>Details:</strong> {item.details}
                </p>
                <p>
                  <strong>Status:</strong> {item.status}
                </p>
              </div>

              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteInclusion(item.id)}
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

export default InclusionManager;
