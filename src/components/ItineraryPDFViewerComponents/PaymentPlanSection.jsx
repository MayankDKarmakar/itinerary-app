import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import InfoTableSection from "./InfoTableSection"; // reusable table
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

  // Card Styles
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
  },
  labelText: {
    fontSize: 10,
    fontWeight: 600,
    color: COLORS.text,
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
    backgroundColor: COLORS.accent3,
  },
  rightBox: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    paddingLeft: 60,
  },
  valueText: {
    fontSize: 10,
    color: COLORS.text,
    fontWeight: 600,
  },
});

const PaymentPlanSection = ({ paymentPlan }) => {
  const { totalAmount, tcs, installments } = paymentPlan;

  return (
    <View style={styles.section} wrap={false}>
      {/* ===== Title ===== */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>
          Payment <Text style={styles.titleHighlight}>Plan</Text>
        </Text>
      </View>

      {/* ===== Total Amount Card ===== */}
      <View style={styles.card}>
        <View style={styles.leftBox}>
          <Text style={styles.labelText}>Total Amount</Text>
          <View style={styles.halftTriangle}></View>
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.valueText}>{totalAmount}</Text>
        </View>
      </View>

      {/* ===== TCS Card ===== */}
      <View style={styles.card}>
        <View style={styles.leftBox}>
          <Text style={styles.labelText}>TCS</Text>
          <View style={styles.halftTriangle}></View>
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.valueText}>{tcs}</Text>
        </View>
      </View>

      {/* ===== Installments Table ===== */}
      <InfoTableSection
        title=""
        highlight=""
        columns={[
          { header: "Installment", key: "inst", flex: 1 },
          { header: "Amount", key: "amount", flex: 1 },
          { header: "Due Date", key: "due", flex: 1.2 },
        ]}
        data={installments}
      />
    </View>
  );
};

export default PaymentPlanSection;
