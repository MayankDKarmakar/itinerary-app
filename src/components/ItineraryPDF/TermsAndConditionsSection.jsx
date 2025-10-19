import React from "react";
import { View, Text, Link, StyleSheet } from "@react-pdf/renderer";
import { COLORS } from "./pdfStyles";

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    color: COLORS.text,
  },
  highlight: {
    color: COLORS.textHighLit,
  },
  link: {
    fontSize: 10,
    fontWeight: 600,
    color: "#2F80ED",
    textDecoration: "underline",
  },
});

const TermsAndConditionsSection = () => {
  return (
    <View style={styles.section} wrap={false}>
      {/* Title */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>
          Terms and <Text style={styles.highlight}>Conditions</Text>
        </Text>
      </View>

      {/* Clickable link */}
      <Link src="https://example.com/terms" style={styles.link}>
        View all terms and conditions
      </Link>
    </View>
  );
};

export default TermsAndConditionsSection;
