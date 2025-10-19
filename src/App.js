import React, { useState } from "react";
import sampleData from "./sampleData";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
// import ItineraryHeaderSection from "./components/ItineraryHeaderSection";
import ItineraryPDFViewer from "./components/ItineraryPDF/ItineraryPDFViewer";

export default function App() {
  const [data, setData] = useState({
    travelerName: "Rahul",
    tripTitle: "Singapore Itinerary",
    duration: "4 Days 3 Nights",
    overview: {
      departureFrom: "Mumbai",
      departureDate: "31 Oct 2025",
      arrivalDate: "01 Nov 2025",
      destination: "Singapore",
      travellers: 4,
    },
    days: [
      {
        id: 1,
        date: "27 Nov 2025",
        title: "Arrival & City Exploration",
        morning: ["Arrive in Singapore. Transfer From Airport to hotel."],
        afternoon: [
          "Hotel check-in",
          "Marina Bay Sands Skypark",
          "Optional Stroll Along Marina Bay waterfront Promenade or Helix Bridge",
        ],
        evening: ["Gardens By The Bay, Including Surprise walk near beach"],
      },
      {
        id: 2,
        date: "27 Nov 2025",
        title: "Arrival & City Exploration",
        morning: ["Arrive in Singapore. Transfer From Airport to hotel."],
        afternoon: [
          "Hotel check-in",
          "Marina Bay Sands Skypark",
          "Optional Stroll Along Marina Bay waterfront Promenade or Helix Bridge",
        ],
        evening: ["Gardens By The Bay, Including Surprise walk near beach"],
      },
      {
        id: 3,
        date: "27 Nov 2025",
        title: "Arrival & City Exploration",
        morning: ["Arrive in Singapore. Transfer From Airport to hotel."],
        afternoon: [
          "Hotel check-in",
          "Marina Bay Sands Skypark",
          "Optional Stroll Along Marina Bay waterfront Promenade or Helix Bridge",
        ],
        evening: ["Gardens By The Bay, Including Surprise walk near beach"],
      },
      {
        id: 4,
        date: "27 Nov 2025",
        title: "Arrival & City Exploration",
        morning: ["Arrive in Singapore. Transfer From Airport to hotel."],
        afternoon: [
          "Hotel check-in",
          "Marina Bay Sands Skypark",
          "Optional Stroll Along Marina Bay waterfront Promenade or Helix Bridge",
        ],
        evening: ["Gardens By The Bay, Including Surprise walk near beach"],
      },
    ],
    flights: [
      {
        date: "Thu 10 Jan'24",
        airline: "Air India (AX-123)",
        route: "From Delhi (DEL) To Singapore (SIN)",
      },
      {
        date: "Thu 10 Jan'24",
        airline: "Air India (AX-123)",
        route: "From Delhi (DEL) To Singapore (SIN)",
      },
      {
        date: "Thu 10 Jan'24",
        airline: "Air India (AX-123)",
        route: "From Delhi (DEL) To Singapore (SIN)",
      },
      {
        date: "Thu 10 Jan'24",
        airline: "Air India (AX-123)",
        route: "From Delhi (DEL) To Singapore (SIN)",
      },
    ],
    hotelBookings: [
      {
        id: 1,
        city: "Singapore",
        checkIn: "24/02/2024",
        checkOut: "26/02/2024",
        nights: 2,
        hotelName: "Super Townhouse Oak Vashi Formerly Blue Diamond",
      },
      {
        id: 2,
        city: "Singapore",
        checkIn: "24/02/2024",
        checkOut: "26/02/2024",
        nights: 2,
        hotelName: "Super Townhouse Oak Vashi Formerly Blue Diamond",
      },
      {
        id: 3,
        city: "Singapore",
        checkIn: "24/02/2024",
        checkOut: "26/02/2024",
        nights: 2,
        hotelName: "Super Townhouse Oak Vashi Formerly Blue Diamond",
      },
      {
        id: 4,
        city: "Singapore",
        checkIn: "24/02/2024",
        checkOut: "26/02/2024",
        nights: 2,
        hotelName: "Super Townhouse Oak Vashi Formerly Blue Diamond",
      },
      {
        id: 5,
        city: "Singapore",
        checkIn: "24/02/2024",
        checkOut: "26/02/2024",
        nights: 2,
        hotelName: "Super Townhouse Oak Vashi Formerly Blue Diamond",
      },
    ],
    notes: [
      {
        id: 1,
        point: "Visa",
        detail: "Visa processing may take up to 10 working days.",
      },
    ],
    paymentPlan: {
      totalAmount: "₹9,00,000 For 3 Pax (Inclusive Of GST)",
      tcs: "Not Collected",
      installments: [
        {
          id: 1,
          inst: "Installment 1",
          amount: "₹2,50,000",
          due: "Initial Payment",
        },
        {
          id: 2,
          inst: "Installment 2",
          amount: "₹4,00,000",
          due: "Post Visa Approval",
        },
        {
          id: 3,
          inst: "Installment 3",
          amount: "Remaining",
          due: "20 Days Before Departure",
        },
      ],
    },
    inclusionSummaryData: [
      {
        category: "Flight",
        count: 2,
        details: "All Flights Mentioned",
        status: "Awaiting Confirmation",
      },
      {
        category: "Tourist Tax",
        count: 2,
        details:
          "Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns), Novotel (Gold Coast), Holiday Inn (Melbourne)",
        status: "Awaiting Confirmation",
      },
      {
        category: "Hotel",
        count: 2,
        details: "Airport To Hotel - Hotel To Attractions - Day Trips If Any",
        status: "Included",
      },
    ],
    exclusions: ["Visa fees", "Personal expenses"],
    visaDetails: {
      type: "Tourist",
      validity: "6 Months",
      processingDate: "15 Oct 2025",
    },
    activities: [
      {
        city: "Singapore",
        activity: "Marina Bay Sands",
        type: "Sightseeing",
        time: "2-3 Hours",
      },
    ],
  });

  return (
    <div className="app-container">
      <PDFViewer width="100%" height="800">
        <ItineraryPDFViewer data={data} />
      </PDFViewer>
    </div>
  );
}
