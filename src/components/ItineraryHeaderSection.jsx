// // ItineraryHeaderSection.jsx
// import React from "react";
// import "../utils/font";
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   Font,
// } from "@react-pdf/renderer";
// // import gradientBg from "../assets/gradient_1200_800.png";
// const COLORS = {
//   primary: "#5b2b8a",
//   accent1: "#4BA1EB",
//   accent2: "#936FE0",
//   lightBg: "#f9f7ff",
//   border: "#666",
//   purpleTxt: "#342766",
//   text: "#000",
//   muted: "#777",
// };

// // Register Poppins
// // Font.register({
// //   family: "Poppins",
// //   fonts: [
// //     {
// //       src: "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Regular.ttf",
// //     },
// //     {
// //       src: "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-SemiBold.ttf",
// //       fontWeight: 600,
// //     },
// //   ],
// // });

// const styles = StyleSheet.create({
//   page: { fontFamily: "Roboto", padding: 30, backgroundColor: "#fff" },
//   logo: {
//     fontFamily: "RedRose",
//     letterSpacing: 2,
//     textAlign: "center",
//     marginBottom: 6,
//     fontSize: 28,
//     color: COLORS.purpleTxt,
//     fontWeight: 300,
//   },
//   taglineContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 25,
//   },
//   tagline: {
//     textAlign: "center",
//     fontSize: 8,
//     color: "#666",
//     marginBottom: 12,
//   },
//   taglineImg: {
//     width: "1rem",
//   },
//   bannerWrapper: {
//     position: "relative",
//     height: 130,
//     borderRadius: 12,
//     overflow: "hidden",
//     marginBottom: 18,
//   },
//   bannerImage: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   bannerOverlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     paddingHorizontal: 10,
//   },
//   greeting: {
//     fontFamily: "Poppins",
//     fontSize: 22,
//     color: "#fff",
//     fontWeight: 500,
//   },
//   title: {
//     fontFamily: "Poppins",
//     fontSize: 22,
//     color: "#fff",
//     fontWeight: 500,
//   },
//   duration: { fontFamily: "Poppins", fontSize: 14, color: "#fff" },

//   infoBox: {
//     marginTop: 5,
//     flexDirection: "row",
//     width: "100%",
//     borderWidth: 1,
//     borderColor: COLORS.accent2,
//     borderRadius: 8,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     justifyContent: "space-between",
//     fontSize: 9,
//   },
//   infoItem: { width: "20%" },
//   label: { fontWeight: 600, color: "#333" },
//   value: { color: "#555", marginTop: 2 },

//   // ====== DAY TIMELINE ======
//   dayContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//     marginTop: 20,
//     paddingBottom: 20,
//     paddingTop: 20,
//     borderBottomWidth: 0.5,
//     borderBottomColor: COLORS.border,
//   },
//   dayLeftBar: {
//     width: 40,
//     backgroundColor: COLORS.purpleTxt,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingVertical: 30,
//   },
//   dayNumber: {
//     fontSize: 10,
//     color: "#fff",
//     transform: "rotate(-90deg)",
//     fontWeight: 600,
//   },
//   dayRightContent: {
//     flexDirection: "row",
//     flex: 1,
//     paddingLeft: 20,
//   },
//   dayTopRow: {
//     flexDirection: "coloumn",
//     justifyContent: "center",
//   },
//   dayImage: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     objectFit: "cover",
//     marginRight: 15,
//   },
//   dayInfo: {
//     flexDirection: "column",
//   },
//   dayDate: {
//     fontSize: 10,
//     fontWeight: 600,
//     color: "#333",
//     marginBottom: 2,
//   },
//   dayTitle: {
//     fontSize: 9,
//     color: "#666",
//   },

//   timeline: {
//     marginTop: 10,
//     flexDirection: "column",
//     flex: 1,
//     fontSize: 8,
//     color: "#333",
//   },
//   timelineRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     // alignItems: "flex-start",
//     marginBottom: 4,
//   },
//   timeLabel: {
//     width: 60,
//     fontWeight: 600,
//   },
//   bullet: { marginRight: 4 },
//   activityText: { flex: 1 },

//   // ====== FOOTER ======
//   footerContainer: {
//     position: "absolute",
//     bottom: 20,
//     left: 30,
//     right: 30,
//     borderTopWidth: 1,
//     borderTopColor: "#D3D3D3",
//     paddingTop: 8,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   footerLeft: { flexDirection: "column" },
//   footerRight: { flexDirection: "column", alignItems: "flex-end" },
//   footerText: { fontSize: 8, color: "#666" },
//   footerLink: { fontSize: 8, color: "#4A2ECC" },
//   footerTagline: { fontSize: 8, color: "#4A2ECC", fontWeight: 600 },
// });

// const ItineraryHeaderSection = ({ data }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <Text style={styles.logo}>vigovia</Text>
//       <View style={styles.taglineContainer}>
//         <Text style={styles.tagline}>PLAN.PACK.GO </Text>
//         <Image
//           src="/assets/plane-taking-off.png"
//           style={styles.taglineImg}
//         ></Image>
//       </View>

//       {/* Gradient Banner using PNG */}
//       <View style={styles.bannerWrapper}>
//         <Image src="/assets/gradientBanner.png" style={styles.bannerImage} />
//         <View style={styles.bannerOverlay}>
//           <Text style={styles.greeting}>Hi, {data.travelerName}!</Text>
//           <Text style={styles.title}>{data.tripTitle}</Text>
//           <Text style={styles.duration}>{data.duration}</Text>
//         </View>
//       </View>

//       {/* Overview Table */}
//       <View style={styles.infoBox}>
//         <View style={styles.infoItem}>
//           <Text style={styles.label}>Departure From :</Text>
//           <Text style={styles.value}>{data.overview.departureFrom}</Text>
//         </View>
//         <View style={styles.infoItem}>
//           <Text style={styles.label}>Departure :</Text>
//           <Text style={styles.value}>{data.overview.departureDate}</Text>
//         </View>
//         <View style={styles.infoItem}>
//           <Text style={styles.label}>Arrival :</Text>
//           <Text style={styles.value}>{data.overview.arrivalDate}</Text>
//         </View>
//         <View style={styles.infoItem}>
//           <Text style={styles.label}>Destination :</Text>
//           <Text style={styles.value}>{data.overview.destination}</Text>
//         </View>
//         <View style={styles.infoItem}>
//           <Text style={styles.label}>No. Of Travellers :</Text>
//           <Text style={styles.value}>{data.overview.travellers}</Text>
//         </View>
//       </View>

//       {/* //--------------------------------------------------------------------// */}
//       {/* ===== DAILY ITINERARY SECTIONS ===== */}
//       {data.days.map((day, i) => (
//         <View key={day.id} style={styles.dayContainer}>
//           {/* LEFT VERTICAL BAR */}
//           <View style={styles.dayLeftBar}>
//             <Text style={styles.dayNumber}>Day {i + 1}</Text>
//           </View>

//           {/* RIGHT CONTENT */}
//           <View style={styles.dayRightContent}>
//             <View style={styles.dayTopRow}>
//               <Image
//                 src="https://picsum.photos/200/200" //we will replace with actual day image URL
//                 style={styles.dayImage}
//               />
//               <View style={styles.dayInfo}>
//                 <Text style={styles.dayDate}>{day.date}</Text>
//                 <Text style={styles.dayTitle}>{day.title}</Text>
//               </View>
//             </View>

//             <View style={styles.timeline}>
//               {Object.entries({
//                 Morning: day.morning,
//                 Afternoon: day.afternoon,
//                 Evening: day.evening,
//               }).map(([time, acts]) => (
//                 <View key={time} style={styles.timelineRow}>
//                   <Text style={styles.timeLabel}>{time}</Text>
//                   <View style={{ flex: 1 }}>
//                     {acts.map((a, idx) => (
//                       <Text key={idx}>• {a}</Text>
//                     ))}
//                   </View>
//                 </View>
//               ))}
//             </View>
//           </View>
//         </View>
//       ))}

//       {/* ===== FIXED FOOTER ===== */}
//       <View style={styles.footerContainer} fixed>
//         <View style={styles.footerLeft}>
//           <Text style={styles.footerText}>Vigovia Tech Pvt. Ltd</Text>
//           <Text style={styles.footerText}>
//             Hd-109 Cinnabar Hills, Links Business Park, Karnataka, India
//           </Text>
//           <Text style={styles.footerText}>CIN: U79110KA2024PTC191890</Text>
//         </View>

//         <View style={styles.footerRight}>
//           <Text style={styles.footerText}>Phone: +91-9504061112</Text>
//           <Text style={styles.footerText}>Email: Utkarsh@Vigovia.com</Text>
//           <Text style={styles.footerTagline}>vigovia</Text>
//         </View>
//       </View>
//     </Page>
//   </Document>
// );

// export default ItineraryHeaderSection;
