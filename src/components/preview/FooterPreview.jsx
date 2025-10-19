import React from "react";

const FooterPreview = () => {
  return (
    <section
      style={{
        marginTop: 20,
        paddingTop: 12,
        borderTop: "1px solid #e6e0f4",
        color: "#555",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontWeight: 700 }}>Your Company Name</div>
          <div style={{ fontSize: 13 }}>
            Registered Office: address line 1, city
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontWeight: 600 }}>Contact</div>
          <div style={{ fontSize: 13 }}>+91 99xxxxxxx | info@company.com</div>
        </div>
      </div>
    </section>
  );
};

export default FooterPreview;
