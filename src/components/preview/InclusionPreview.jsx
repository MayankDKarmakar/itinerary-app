import React from "react";
import InfoTablePreview from "./InfoTablePreview";

const InclusionPreview = ({ data, setData }) => {
  // Define table columns exactly as per PDF version
  const columns = [
    { header: "Category", key: "category", flex: 1.2 },
    { header: "Count", key: "count", flex: 0.6 },
    { header: "Details", key: "details", flex: 2 },
    { header: "Status", key: "status", flex: 1 },
  ];

  // Notes (optional – same style as PDF)
  const notes = [
    "All inclusions are subject to confirmation based on final availability.",
    "The inclusions listed are part of the package cost unless mentioned otherwise.",
  ];

  return (
    <InfoTablePreview
      title="Inclusion"
      highlight="Summary"
      columns={columns}
      data={data.inclusionSummaryData}
      notes={notes}
      setData={setData}
      sectionKey="inclusionSummaryData"
    />
  );
};

export default InclusionPreview;
