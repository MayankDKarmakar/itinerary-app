import React from "react";
import InfoTablePreview from "./InfoTablePreview";
import "./PaymentPreview.css";

const PaymentPreview = ({ data, setData }) => {
  const columns = [
    { header: "Installment", key: "inst", flex: 1 },
    { header: "Amount", key: "amount", flex: 1 },
    { header: "Due Date", key: "due", flex: 1 },
  ];

  return (
    <section className="payment-plan-section">
      {/* === Title === */}
      <div className="title-row">
        <h3 className="title">
          Payment <span className="title-highlight">Plan</span>
        </h3>
      </div>

      {/* === Total Amount & TCS Cards === */}
      <div className="payment-cards">
        <div className="payment-card">
          <div className="card-left">
            <span className="card-label">Total Amount</span>
            <div className="triangle" />
          </div>
          <div className="card-right">
            <span className="card-value">{data.paymentPlan.totalAmount}</span>
          </div>
        </div>

        <div className="payment-card">
          <div className="card-left">
            <span className="card-label">TCS</span>
            <div className="triangle" />
          </div>
          <div className="card-right">
            <span className="card-value">{data.paymentPlan.tcs}</span>
          </div>
        </div>
      </div>

      {/* === Installment Table === */}
      <InfoTablePreview
        title=""
        highlight=""
        columns={columns}
        data={data.paymentPlan.installments}
        setData={setData}
        sectionKey="paymentPlan.installments"
      />
    </section>
  );
};

export default PaymentPreview;
