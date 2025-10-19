import React from "react";
import "./InfoTablePreview.css";

const InfoTablePreview = ({
  title,
  highlight,
  columns = [],
  data = [],
  notes = [],
  footerNote = null,
  setData,
  sectionKey, // example: "hotelBookings"
}) => {
  // Handle Delete Row
  const handleDeleteRow = (id) => {
    setData((prev) => ({
      ...prev,
      [sectionKey]: (prev[sectionKey] || []).filter((item) => item.id !== id),
    }));
  };

  return (
    <section className="info-table-section">
      {/* === Title === */}
      <div className="title-row">
        <h3 className="title">
          {title} <span className="title-highlight">{highlight}</span>
        </h3>
      </div>

      {/* === Table === */}
      <div className="table-wrapper">
        {/* Header */}
        <div className="header-row">
          {columns.map((col, idx) => (
            <div
              key={col.key || idx}
              className={`header-cell ${
                idx === columns.length - 1 ? "last-header-cell" : ""
              }`}
              style={{ flex: col.flex || 1 }}
            >
              {col.header}
            </div>
          ))}
        </div>

        {/* Rows */}
        {data.length > 0 ? (
          data.map((item, rowIndex) => {
            const isLastRow = rowIndex === data.length - 1;
            return (
              <div
                key={item.id || rowIndex}
                className={`data-row ${isLastRow ? "last-row" : ""}`}
              >
                {columns.map((col, colIndex) => (
                  <div
                    key={`${col.key}-${rowIndex}`}
                    className={`data-cell ${
                      colIndex === columns.length - 1 ? "last-cell" : ""
                    }`}
                    style={{ flex: col.flex || 1 }}
                  >
                    {item[col.key] ?? "-"}
                  </div>
                ))}

                {/* Floating Delete Button */}
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteRow(item.id)}
                >
                  ✕
                </button>
              </div>
            );
          })
        ) : (
          <div className="data-row">
            <div className="data-cell no-records">No records found.</div>
          </div>
        )}
      </div>

      {/* === Notes === */}
      {notes.length > 0 && (
        <div className="note-container">
          {notes.map((line, idx) => (
            <p key={idx} className="note-text">
              {idx + 1}. {line}
            </p>
          ))}
        </div>
      )}

      {/* === Footer Note === */}
      {footerNote && (
        <div className="footer-note">
          <p className="footer-title">{footerNote.title}</p>
          <p className="footer-text">{footerNote.text}</p>
        </div>
      )}

      <div className="divider" />
    </section>
  );
};

export default InfoTablePreview;
