import React from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import HeaderSection from "./HeaderSection";
import DayTimelineSection from "./DayTimelineSection";
import FooterSection from "./FooterSection";
import FlightSummarySection from "./FlightSummarySection";
import HotelBookingSection from "./HotelBookingSection";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    fontWeight: 300,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
});

const ItineraryPDFViewer = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <HeaderSection data={data} />
      <DayTimelineSection days={data.days} />
      <FlightSummarySection flights={data.flights} />
      <HotelBookingSection bookings={data.hotelBookings} />
      <FooterSection />
    </Page>
  </Document>
);

export default ItineraryPDFViewer;
