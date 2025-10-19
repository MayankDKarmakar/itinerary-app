import React from "react";
import OverviewPreview from "./preview/OverviewPreview";
import FlightSummaryPreview from "./preview/FlightSummaryPreview";
import HotelBookingPreview from "./preview/HotelBookingPreview";
import DaysPreview from "./preview/DaysPreview";
import InclusionPreview from "./preview/InclusionPreview";
import PaymentPreview from "./preview/PaymentPreview";

const ItineraryPreview = ({ data = {}, setData }) => {
  return (
    <div className="itinerary-preview">
      {/* Overview */}
      <OverviewPreview data={data} />
      {/* Days */}
      <DaysPreview days={data.days} setData={setData} />
      {/* Flights */}
      <FlightSummaryPreview data={data} setData={setData} />
      {/* Hotels  */}
      <HotelBookingPreview data={data} setData={setData} />
      {/* Inclusions    */}
      <InclusionPreview data={data} setData={setData} />
      {/* Payments  */}
      <PaymentPreview data={data} setData={setData} />
    </div>
  );
};

export default ItineraryPreview;
