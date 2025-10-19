import React, { useState, useMemo, useEffect } from "react";
import sampleData from "./sampleData";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import ItineraryPDFViewer from "./components/ItineraryPDFViewer";
import ItineraryPDFBuilder from "./components/ItineraryPDFBuilder";
import ItineraryHeader from "./components/ItineraryHeader";
import FooterSection from "./components/FooterSection";

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
        id: 1,
        date: "Thu 10 Jan'24",
        airline: "Air India (AX-123)",
        route: { from: "Delhi (DEL)", to: "Singapore (SIN)" },
      },
      {
        id: 2,
        date: "Thu 10 Jan'24",
        airline: "Air India (AX-123)",
        route: { from: "Delhi (DEL)", to: "Singapore (SIN)" },
      },
      {
        id: 3,
        date: "Thu 10 Jan'24",
        airline: "Air India (AX-123)",
        route: { from: "Delhi (DEL)", to: "Singapore (SIN)" },
      },
      {
        id: 4,
        date: "Thu 10 Jan'24",
        airline: "Air India (AX-123)",
        route: { from: "Delhi (DEL)", to: "Singapore (SIN)" },
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
        id: 1,
        category: "Flight",
        count: 2,
        details: "All Flights Mentioned",
        status: "Awaiting Confirmation",
      },
      {
        id: 2,
        category: "Tourist Tax",
        count: 2,
        details:
          "Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns), Novotel (Gold Coast), Holiday Inn (Melbourne)",
        status: "Awaiting Confirmation",
      },
      {
        id: 3,
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

  //   const [delayedData, setDelayedData] = useState(data);

  //   useEffect(() => {
  //     let ignore = false;
  //     const timer = setTimeout(() => {
  //       if (!ignore) setDelayedData(data);
  //     }, 1000); // Debounce PDF update

  //     return () => {
  //       ignore = true;
  //       clearTimeout(timer);
  //     };
  //   }, [data]);

  //   const memoizedData = useMemo(
  //     () => delayedData,
  //     [JSON.stringify(delayedData)]
  //   );

  //   return (
  //     <div className="app-container">
  //       {/* Fixed Header */}

  //       <ItineraryHeader className="fixed-header" />

  //       {/* Main Content */}
  //       <div className="main">
  //         {/* Left Panel — Builder */}
  //         <div className="left-panel">
  //           <ItineraryPDFBuilder data={data} setData={setData} />
  //         </div>

  //         {/* Right Panel — PDF Viewer */}
  //         <div className="right-panel">
  //           <PDFViewer width="100%" height="100%">
  //             <ItineraryPDFViewer data={memoizedData} />
  //           </PDFViewer>
  //         </div>
  //       </div>

  //       {/* Fixed Footer */}

  //       <FooterSection className="fixed-footer" />
  //     </div>
  //   );
  // }

  // === STABILIZED PDF DATA ===
  const [delayedData, setDelayedData] = useState(data);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setIsUpdating(true);
    const timer = setTimeout(() => {
      setDelayedData(data);
      setIsUpdating(false);
    }, 600); // Delay PDF update slightly after data changes
    return () => clearTimeout(timer);
  }, [data]);

  // === MEMOIZED DATA FOR PERFORMANCE ===
  const memoizedData = useMemo(
    () => delayedData,
    [JSON.stringify(delayedData)]
  );

  return (
    <div className="app-container">
      {/* Fixed Header */}
      <ItineraryHeader className="fixed-header" />

      <div className="main">
        {/* Left — Builder */}
        <div className="left-panel">
          <ItineraryPDFBuilder data={data} setData={setData} />
        </div>

        {/* Right — PDF Viewer */}
        <div className="right-panel">
          {isUpdating ? (
            <div className="pdf-loading-placeholder">
              <p>⏳ Updating PDF preview...</p>
            </div>
          ) : (
            <PDFViewer width="100%" height="100%">
              <ItineraryPDFViewer data={memoizedData} />
            </PDFViewer>
          )}
        </div>
      </div>

      {/* Fixed Footer */}
      <FooterSection className="fixed-footer" />
    </div>
  );
}
