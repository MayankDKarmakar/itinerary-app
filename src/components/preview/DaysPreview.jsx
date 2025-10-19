import React from "react";
import "./DaysPreview.css";

const DaysPreview = ({ days = [], setData }) => {
  const handleDelete = (id) => {
    setData((prev) => ({
      ...prev,
      days: prev.days.filter((d) => d.id !== id),
    }));
  };

  return (
    <section className="days-preview">
      {days.map((day, index) => (
        <div key={day.id} className="day-card">
          {/* Left vertical bar */}
          <div className="day-left-bar">
            <span className="day-number">Day {index + 1}</span>
          </div>

          {/* Right content */}
          <div className="day-right-content">
            <div className="day-top-row">
              <img
                src={`https://picsum.photos/200?random=${index}`}
                alt={`Day ${index + 1}`}
                className="day-image"
              />
              <div className="day-info">
                <p className="day-date">{day.date}</p>
                <p className="day-title">{day.title}</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="timeline">
              {Object.entries({
                Morning: day.morning,
                Afternoon: day.afternoon,
                Evening: day.evening,
              }).map(([period, activities]) => (
                <div key={period} className="timeline-row">
                  <span className="time-label">{period}</span>
                  <div className="activity-container">
                    {activities.map((act, idx) => (
                      <div key={idx} className="activity-item">
                        <span className="bullet">•</span>
                        <span className="activity-text">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="delete-day-btn"
            onClick={() => handleDelete(day.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </section>
  );
};

export default DaysPreview;
