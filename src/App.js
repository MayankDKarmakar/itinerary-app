// import React, { useState } from "react";
// import { sampleData } from "./sampleData";
// import "./App1.css";
// import { PDFDownloadLink } from "@react-pdf/renderer";

// import ItineraryPDFViewer from "./components/ItineraryPDFViewer";
// import ItineraryPDFBuilder from "./components/ItineraryPDFBuilder";
// import ItineraryHeader from "./components/ItineraryHeader";
// import FooterSection from "./components/FooterSection";
// import ItineraryPreview from "./components/ItineraryPreview";

// export default function App() {
//   const [data, setData] = useState(sampleData);

//   // Render the PDF only when the user clicks "Download"
//   const handleDownload = async () => {
//     const blob = (
//       <PDFDownloadLink
//         document={<ItineraryPDFViewer data={data} />}
//         fileName={`${data.tripTitle || "itinerary"}.pdf`}
//       >
//         {({ loading }) => (
//           <button className="download-btn">
//             {loading ? "Generating PDF..." : "⬇️ Download PDF"}
//           </button>
//         )}
//       </PDFDownloadLink>
//     );
//     return blob;
//   };

//   return (
//     <div className="app-container">
//       <ItineraryHeader className="fixed-header" />

//       <div className="main">
//         <div className="left-panel">
//           <ItineraryPDFBuilder data={data} setData={setData} />
//         </div>

//         <div className="right-panel">
//           <div className="itinerary-preview">
//             <ItineraryPreview data={data} setData={setData} />
//           </div>

//           <div className="pdf-download-controls">
//             {/* Render the download link only when user clicks */}
//             <PDFDownloadLink
//               key={data.days.length + data.flights.length}
//               document={
//                 <ItineraryPDFViewer data={JSON.parse(JSON.stringify(data))} />
//               }
//               fileName={`${data.tripTitle || "itinerary"}.pdf`}
//             >
//               {({ loading }) => (
//                 <button className="download-btn">
//                   {loading ? "Generating PDF..." : "⬇️ Download PDF"}
//                 </button>
//               )}
//             </PDFDownloadLink>
//           </div>
//         </div>
//       </div>

//       <FooterSection className="fixed-footer" />
//     </div>
//   );
// }

import React, { useState } from "react";
import { sampleData } from "./sampleData";
import "./App.css";
import { PDFDownloadLink } from "@react-pdf/renderer";

import ItineraryPDFViewer from "./components/ItineraryPDFViewer";
import ItineraryPDFBuilder from "./components/ItineraryPDFBuilder";
import ItineraryHeader from "./components/ItineraryHeader";
import FooterSection from "./components/FooterSection";
import ItineraryPreview from "./components/ItineraryPreview";

export default function App() {
  const [data, setData] = useState(sampleData);

  return (
    <div className="app-container">
      {/* ===== HEADER ===== */}
      <ItineraryHeader className="fixed-header" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="main">
        {/* ==== LEFT PANEL (Forms + Download Button) ==== */}
        <div className="left-panel">
          <ItineraryPDFBuilder data={data} setData={setData} />

          {/* === Download Button Section === */}
          <div className="pdf-download-controls">
            <PDFDownloadLink
              key={
                data.days.length +
                data.flights.length +
                data.hotelBookings.length
              }
              document={
                <ItineraryPDFViewer data={JSON.parse(JSON.stringify(data))} />
              }
              fileName={`${data.tripTitle || "itinerary"}.pdf`}
            >
              {({ loading }) => (
                <button className="download-btn">
                  {loading ? "Generating PDF..." : "⬇️ Download PDF"}
                </button>
              )}
            </PDFDownloadLink>
          </div>
        </div>

        {/* ==== RIGHT PANEL (Preview) ==== */}
        <div className="right-panel">
          <div className="itinerary-preview">
            <ItineraryPreview data={data} setData={setData} />
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <FooterSection className="fixed-footer" />
    </div>
  );
}
