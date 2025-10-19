import React from "react";
import OverviewForm from "./ItineraryPDFBuilderComponents/OverviewForm";
import DaysManager from "./ItineraryPDFBuilderComponents/DaysManager";
import FlightsManager from "./ItineraryPDFBuilderComponents/FlightsManager";
import HotelsManager from "./ItineraryPDFBuilderComponents/HotelsManager";
import InclusionManager from "./ItineraryPDFBuilderComponents/InclusionManager";
import PaymentManager from "./ItineraryPDFBuilderComponents/PaymentManager";
const ItineraryPDFBuilder = ({ data, setData }) => {
  return (
    <div>
      <OverviewForm data={data} setData={setData} />
      <DaysManager days={data.days} setData={setData} />
      <FlightsManager flights={data.flights} setData={setData} />
      <HotelsManager hotelBookings={data.hotelBookings} setData={setData} />
      <InclusionManager
        inclusionSummaryData={data.inclusionSummaryData}
        setData={setData}
      />
      <PaymentManager paymentPlan={data.paymentPlan} setData={setData} />
    </div>
  );
};

export default ItineraryPDFBuilder;
