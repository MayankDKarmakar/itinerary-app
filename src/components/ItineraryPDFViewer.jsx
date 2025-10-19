import React from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import HeaderSection from "./ItineraryPDFViewerComponents/HeaderSection";
import DayTimelineSection from "./ItineraryPDFViewerComponents/DayTimelineSection";
import FooterSection from "./ItineraryPDFViewerComponents/FooterSection";
import FlightSummarySection from "./ItineraryPDFViewerComponents/FlightSummarySection";
import InfoTableSection from "./ItineraryPDFViewerComponents/InfoTableSection";
import TermsAndConditionsSection from "./ItineraryPDFViewerComponents/TermsAndConditionsSection";
import PaymentPlanSection from "./ItineraryPDFViewerComponents/PaymentPlanSection";
import VisaDetailsSection from "./ItineraryPDFViewerComponents/VisaDetailsSection";
import BookNowSection from "./ItineraryPDFViewerComponents/BookNowSection";

const importantNotes = [
  {
    point: "Airlines Standard Policy",
    details:
      "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost",
  },
  {
    point: "Flight/Hotel Cancellation",
    details:
      "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost",
  },
  {
    point: "Trip Insurance",
    details:
      "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost",
  },
  {
    point: "Hotel Check-In & Check-Out",
    details:
      "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost",
  },
  {
    point: "Visa Rejection",
    details:
      "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost",
  },
];

const scopeOfServiceData = [
  {
    service: "Flight Tickets And Hotel Vouchers",
    details: "Delivered 3 Days Post Full Payment",
  },
  {
    service: "Web Check-In",
    details: "Boarding Pass Delivery Via Email/WhatsApp",
  },
  {
    service: "Support",
    details: "Chat Support – Response Time: 4 Hours",
  },
  {
    service: "Cancellation Support",
    details: "Provided",
  },
  {
    service: "Trip Support",
    details: "Response Time: 5 Minutes",
  },
];

//Activity Data
const activityData = [
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Nature/Sightseeing",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    timeRequired: "2-3 Hours",
  },
];

const styles = StyleSheet.create({
  page: {
    position: "relative",
    fontFamily: "Roboto",
    fontWeight: 300,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 80,

    paddingTop: 11,
    backgroundColor: "#fff",
  },
});

const ItineraryPDFViewer = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <HeaderSection data={data} />
      <DayTimelineSection days={data.days} />
      <FlightSummarySection flights={data.flights} />

      {/* HoteBookingSection */}
      <InfoTableSection
        title="Hotel"
        highlight="Bookings"
        columns={[
          { header: "City", key: "city", flex: 1.2 },
          { header: "Check In", key: "checkIn", flex: 1 },
          { header: "Check Out", key: "checkOut", flex: 1 },
          { header: "Nights", key: "nights", flex: 0.6 },
          { header: "Hotel Name", key: "hotelName", flex: 2 },
        ]}
        data={data.hotelBookings}
        notes={[
          "All Hotels Are Tentative And Can Be Replaced With Similar.",
          "Breakfast Included For All Hotel Stays.",
          "All Hotels Will Be 4* And Above Category.",
          "A maximum occupancy of 2 people/room is allowed in most hotels.",
        ]}
      />

      {/* ImportantNotesSection */}
      <InfoTableSection
        title="Important"
        highlight="Notes"
        columns={[
          { header: "Point", key: "point", flex: 1 },
          { header: "Details", key: "details", flex: 2 },
        ]}
        data={importantNotes}
      />
      {/* ScopeOfSerciceSection */}
      <InfoTableSection
        title="Scope Of"
        highlight="Service"
        columns={[
          { header: "Service", key: "service", flex: 1 },
          { header: "Details", key: "details", flex: 2 },
        ]}
        data={scopeOfServiceData}
      />

      {/* InclusionSummarySection */}
      <InfoTableSection
        title="Inclusion"
        highlight="Summary"
        columns={[
          { header: "Category", key: "category", flex: 1 },
          { header: "Count", key: "count", flex: 0.6 },
          { header: "Details", key: "details", flex: 2 },
          { header: "Status / Comments", key: "status", flex: 1 },
        ]}
        data={data.inclusionSummaryData}
        footerNote={{
          title: "Transfer Policy (Refundable Upon Claim)",
          text: "If Any Transfer Is Delayed Beyond 15 Minutes, Customers May Book An App-Based Or Radio Taxi And Claim A Refund For That Specific Leg.",
        }}
      />

      {/* ActivityTableSection */}
      <InfoTableSection
        title="Activity"
        highlight="Table"
        columns={[
          { header: "City", key: "city", flex: 1 },
          { header: "Activity", key: "activity", flex: 2 },
          { header: "Type", key: "type", flex: 1 },
          { header: "Time Required", key: "timeRequired", flex: 1.2 },
        ]}
        data={activityData}
      />
      {/* Terms and Conditions Sections */}
      <TermsAndConditionsSection />
      <PaymentPlanSection paymentPlan={data.paymentPlan} />
      <VisaDetailsSection />
      <BookNowSection />
      <FooterSection />
    </Page>
  </Document>
);

export default ItineraryPDFViewer;
