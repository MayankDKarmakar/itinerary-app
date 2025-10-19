import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { COLORS } from "./pdfStyles";

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
  },

  // Title
  titleRow: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: COLORS.text,
  },
  titleHighlight: {
    color: COLORS.textHighLit,
  },

  // Main bordered container
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: COLORS.accent2,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  // Each info column
  infoColumn: {
    flex: 1,
    alignItems: "center",
  },

  label: {
    fontSize: 10,
    fontWeight: 600,
    color: COLORS.text,
    marginBottom: 4,
  },

  value: {
    fontSize: 10,
    fontWeight: 400,
    color: COLORS.text,
  },

  // Divider line after section
  divider: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#C5C5C5",
  },
});

const VisaDetailsSection = () => {
  // Static data as per figma
  const visaDetails = {
    visaType: "123456",
    validity: "123456",
    processingDate: "123456",
  };

  return (
    <View style={styles.section} wrap={false}>
      {/* Title */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>
          Visa <Text style={styles.titleHighlight}>Details</Text>
        </Text>
      </View>

      {/* Info box */}
      <View style={styles.infoBox}>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Visa Type :</Text>
          <Text style={styles.value}>{visaDetails.visaType}</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Validity :</Text>
          <Text style={styles.value}>{visaDetails.validity}</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Processing Date :</Text>
          <Text style={styles.value}>{visaDetails.processingDate}</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />
    </View>
  );
};

export default VisaDetailsSection;
