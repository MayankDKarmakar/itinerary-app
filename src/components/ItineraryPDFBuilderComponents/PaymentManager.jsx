import React, { useState } from "react";
import "./builderCommon.css";

const PaymentManager = ({ paymentPlan = {}, setData }) => {
  const [formData, setFormData] = useState({
    totalAmount: paymentPlan.totalAmount || "",
    tcs: paymentPlan.tcs || "",
    installments: paymentPlan.installments || [],
  });

  const [installment, setInstallment] = useState({
    inst: "",
    amount: "",
    due: "",
  });

  // Handle total amount dropdown change
  const handleTotalAmountChange = (value) => {
    setFormData((prev) => ({ ...prev, totalAmount: value }));
    setData((prev) => ({
      ...prev,
      paymentPlan: { ...prev.paymentPlan, totalAmount: value },
    }));
  };

  //  Handle TCS dropdown change
  const handleTcsChange = (value) => {
    setFormData((prev) => ({ ...prev, tcs: value }));
    setData((prev) => ({
      ...prev,
      paymentPlan: { ...prev.paymentPlan, tcs: value },
    }));
  };

  //  Handle installment input change
  const handleInstallmentChange = (field, value) => {
    setInstallment((prev) => ({ ...prev, [field]: value }));
  };

  //  Add new installment
  const handleAddInstallment = () => {
    const { inst, amount, due } = installment;
    if (!inst || !amount || !due) {
      alert("Please fill in all installment fields before adding.");
      return;
    }

    const newInstallment = {
      id: Date.now(),
      inst,
      amount,
      due,
    };

    const updatedInstallments = [...formData.installments, newInstallment];

    setFormData((prev) => ({ ...prev, installments: updatedInstallments }));

    setData((prev) => ({
      ...prev,
      paymentPlan: { ...prev.paymentPlan, installments: updatedInstallments },
    }));

    // Reset input fields
    setInstallment({ inst: "", amount: "", due: "" });
  };

  //  Delete installment
  //   const handleDeleteInstallment = (id) => {
  //     const updatedInstallments = formData.installments.filter(
  //       (i) => i.id !== id
  //     );

  //     setFormData((prev) => ({ ...prev, installments: updatedInstallments }));

  //     setData((prev) => ({
  //       ...prev,
  //       paymentPlan: { ...prev.paymentPlan, installments: updatedInstallments },
  //     }));
  //   };

  return (
    <div className="builder-section">
      <h3 className="section-title">Payment Plan 💳</h3>

      {/* === Total Amount Dropdown === */}
      <fieldset className="floating-fieldset">
        <legend>Total Amount</legend>
        <select
          className="input"
          value={formData.totalAmount}
          onChange={(e) => handleTotalAmountChange(e.target.value)}
        >
          <option value="">Select Total Amount</option>
          <option value="₹3,00,000 For 1 Pax (Inclusive Of GST)">
            ₹3,00,000 For 1 Pax (Inclusive Of GST)
          </option>
          <option value="₹6,00,000 For 2 Pax (Inclusive Of GST)">
            ₹6,00,000 For 2 Pax (Inclusive Of GST)
          </option>
          <option value="₹9,00,000 For 3 Pax (Inclusive Of GST)">
            ₹9,00,000 For 3 Pax (Inclusive Of GST)
          </option>
        </select>
      </fieldset>

      {/* === TCS Dropdown === */}
      <fieldset className="floating-fieldset">
        <legend>TCS</legend>
        <select
          className="input"
          value={formData.tcs}
          onChange={(e) => handleTcsChange(e.target.value)}
        >
          <option value="">Select TCS Option</option>
          <option value="Collected">Collected</option>
          <option value="Not Collected">Not Collected</option>
        </select>
      </fieldset>

      {/* === Add Installment Form === */}
      {/* <h4 className="subsection-title">Add Installments</h4> */}
      <div className="subsection-header">
        <h4 className="subsection-title">Add Installments</h4>
        {/* <div className="divider-line"></div> */}
      </div>

      <fieldset className="floating-fieldset">
        <legend>Installment Name</legend>
        <input
          type="text"
          className="input"
          placeholder="e.g. Installment 1"
          value={installment.inst}
          onChange={(e) => handleInstallmentChange("inst", e.target.value)}
          required
        />
      </fieldset>

      <fieldset className="floating-fieldset">
        <legend>Amount</legend>
        <input
          type="text"
          className="input"
          placeholder="e.g. ₹2,50,000"
          value={installment.amount}
          onChange={(e) => handleInstallmentChange("amount", e.target.value)}
          required
        />
      </fieldset>

      <fieldset className="floating-fieldset">
        <legend>Due</legend>
        <input
          type="text"
          className="input"
          placeholder="e.g. Initial Payment / Post Visa Approval"
          value={installment.due}
          onChange={(e) => handleInstallmentChange("due", e.target.value)}
          required
        />
      </fieldset>

      <button
        type="button"
        className="primary-btn"
        onClick={handleAddInstallment}
      >
        + Add Installment
      </button>

      {/* === Installments List === */}
      {/* <div className="days-list">
        {formData.installments.length === 0 ? (
          <p className="no-data">No installments added yet.</p>
        ) : (
          formData.installments.map((item, index) => (
            <div key={item.id || index} className="card">
              <div className="card-header">
                <h4>💰 {item.inst}</h4>
              </div>

              <div className="card-body">
                <p>
                  <strong>Amount:</strong> {item.amount}
                </p>
                <p>
                  <strong>Due:</strong> {item.due}
                </p>
              </div>

              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteInstallment(item.id)}
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

export default PaymentManager;
