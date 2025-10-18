import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
const COLORS = {
  primary: "#5b2b8a",
  accent1: "#4BA1EB",
  accent2: "#936FE0",
  accent3: "#F3E5F5",
  textHighLit: "#680099",
  lightBg: "#f9f7ff",
  border: "#666",
  purpleTxt: "#342766",
  text: "#000",
  muted: "#777",
};

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#C5C5C5",
  },

  // Title
  titleRow: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: "#000",
  },
  titleHighlight: {
    color: COLORS.textHighLit,
  },

  // Flight card
  card: {
    flexDirection: "row",

    alignItems: "center",

    borderWidth: 1,
    borderColor: COLORS.accent2,
    borderRadius: 6,
    marginBottom: 8,
  },
  leftBox: {
    position: "relative",
    width: 140,
    borderRadius: 6,
    backgroundColor: COLORS.accent3,
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    zIndex: 2,
    // overflow: "hidden",
    // borderRightWidth: 1,
    // borderRightColor: "#680099",
  },
  dateText: {
    fontSize: 10,
    fontWeight: 600,
    color: "#000",
  },
  halftTriangle: {
    position: "absolute",
    width: 20.5,
    height: 20.5,
    transform: "rotate(45deg)",
    right: -10,
    top: "85.5%",
    borderTopRightRadius: 5,
    marginTop: -20,
    borderTopWidth: 1,
    borderTopColor: COLORS.accent2,
    borderRightWidth: 1,
    borderRightColor: COLORS.accent2,

    backgroundColor: "#F3E5F5",
  },
  rightBox: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    paddingLeft: 60,
  },
  flightInfo: {
    fontSize: 10,
    color: "#000",
    fontWeight: 300,
  },
  flightBold: {
    fontWeight: 600,
  },

  // Note text
  noteText: {
    fontSize: 8,
    color: "#555",
    marginTop: 8,
  },
});

const FlightSummarySection = ({ flights }) => (
  <View style={styles.section}>
    {/* Heading */}
    <View style={styles.titleRow}>
      <Text style={styles.title}>
        Flight <Text style={styles.titleHighlight}>Summary</Text>
      </Text>
    </View>

    {/* Flight cards */}
    {flights.map((f, i) => (
      <View key={i} style={styles.card} wrap={false}>
        <View style={styles.leftBox}>
          <Text style={styles.dateText}>{f.date}</Text>
          <View style={styles.halftTriangle}></View>
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.flightInfo}>
            <Text style={styles.flightBold}>Fly {f.airline}</Text> {f.route}.
          </Text>
        </View>
      </View>
    ))}

    {/* Note */}
    <Text style={styles.noteText}>
      Note: All Flights Include Meals, Seat Choice (Excluding XL), And 20kg/25Kg
      Checked Baggage.
    </Text>
  </View>
);

export default FlightSummarySection;
