import React from "react";
import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";
import { COLORS } from "./pdfStyles";

const styles = StyleSheet.create({
  section: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  // Main title
  mainTitle: {
    fontFamily: "RedHat",
    fontSize: 20,
    fontWeight: 600,
    color: COLORS.purpleTxt2,
    textAlign: "center",
    marginBottom: 14,
  },

  // Button
  button: {
    width: 200,
    backgroundColor: COLORS.btnColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 40,
    textDecoration: "none",
  },

  buttonText: {
    fontSize: 11,
    color: "#FFFFFF",
    fontWeight: 600,
    textAlign: "center",
    textDecoration: "none",
  },
});

const BookNowSection = () => {
  return (
    <View style={styles.section} wrap={false}>
      {/* Title */}
      <Text style={styles.mainTitle}>PLAN.PACK.GO!</Text>

      {/* Button (Clickable Link) */}
      <Link src="https://booknowexample.com" style={styles.button}>
        <Text style={styles.buttonText}>Book Now</Text>
      </Link>
    </View>
  );
};

export default BookNowSection;
