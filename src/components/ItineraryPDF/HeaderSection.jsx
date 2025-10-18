// ItineraryHeaderSection.jsx
import React from "react";
import "../../utils/font";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
const COLORS = {
  primary: "#5b2b8a",
  accent1: "#4BA1EB",
  accent2: "#936FE0",
  lightBg: "#f9f7ff",
  border: "#666",
  purpleTxt: "#342766",
  text: "#000",
  muted: "#777",
};

// Register Poppins
// Font.register({
//   family: "Poppins",
//   fonts: [
//     {
//       src: "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Regular.ttf",
//     },
//     {
//       src: "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-SemiBold.ttf",
//       fontWeight: 600,
//     },
//   ],
// });

const styles = StyleSheet.create({
  logo: {
    fontFamily: "RedRose",
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 6,
    fontSize: 28,
    color: COLORS.purpleTxt,
    fontWeight: 300,
  },
  taglineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  tagline: {
    textAlign: "center",
    fontSize: 8,
    color: "#666",
    marginBottom: 12,
  },
  taglineImg: {
    width: "1rem",
  },
  bannerWrapper: {
    position: "relative",
    height: 130,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 18,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  bannerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  greeting: {
    fontFamily: "Poppins",
    fontSize: 22,
    color: "#fff",
    fontWeight: 500,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 22,
    color: "#fff",
    fontWeight: 500,
  },
  duration: { fontFamily: "Poppins", fontSize: 14, color: "#fff" },

  infoBox: {
    marginTop: 5,
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.accent2,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    fontSize: 9,
  },
  infoItem: { width: "20%" },
  label: { fontWeight: 600, color: "#333" },
  value: { color: "#555", marginTop: 2 },
});

const HeaderSection = ({ data }) => (
  <view>
    <Text style={styles.logo}>vigovia</Text>
    <View style={styles.taglineContainer}>
      <Text style={styles.tagline}>PLAN.PACK.GO </Text>
      <Image
        src="/assets/plane-taking-off.png"
        style={styles.taglineImg}
      ></Image>
    </View>

    {/* Gradient Banner using PNG */}
    <View style={styles.bannerWrapper}>
      <Image src="/assets/gradientBanner.png" style={styles.bannerImage} />
      <View style={styles.bannerOverlay}>
        <Text style={styles.greeting}>Hi, {data.travelerName}!</Text>
        <Text style={styles.title}>{data.tripTitle}</Text>
        <Text style={styles.duration}>{data.duration}</Text>
      </View>
    </View>

    {/* Overview Table */}
    <View style={styles.infoBox}>
      <View style={styles.infoItem}>
        <Text style={styles.label}>Departure From :</Text>
        <Text style={styles.value}>{data.overview.departureFrom}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.label}>Departure :</Text>
        <Text style={styles.value}>{data.overview.departureDate}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.label}>Arrival :</Text>
        <Text style={styles.value}>{data.overview.arrivalDate}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.label}>Destination :</Text>
        <Text style={styles.value}>{data.overview.destination}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.label}>No. Of Travellers :</Text>
        <Text style={styles.value}>{data.overview.travellers}</Text>
      </View>
    </View>
  </view>
);

export default HeaderSection;
