import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { COLORS } from "./pdfStyles";

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#C5C5C5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    // backgroundColor: "red",
  },

  // Left side
  leftBox: {
    flex: 1.3,
  },
  companyName: {
    fontSize: 10,
    fontWeight: 700,
    color: COLORS.text,
    marginBottom: 4,
  },
  address: {
    fontSize: 9,
    color: COLORS.text,
    lineHeight: 1.4,
  },

  // Middle column (contact info)
  middleBox: {
    flex: 1.2,
  },
  contactLine: {
    fontSize: 9,
    color: COLORS.text,
    marginBottom: 3,
  },
  boldLabel: {
    fontWeight: 600,
  },

  // Right side (logo + tagline)
  rightBox: {
    flex: 0.8,
    alignItems: "flex-end",
  },
  logo: {
    width: 100,
    // height: 20,
    objectFit: "contain",
    // marginBottom: 3,
  },
  tagline: {
    fontSize: 8,
    color: COLORS.purpleTxt,
    fontWeight: 600,
  },
});

const FooterSection = () => {
  return (
    <View style={styles.footer} fixed>
      {/* Left Section */}
      <View style={styles.leftBox}>
        <Text style={styles.companyName}>Vigovia Tech Pvt. Ltd</Text>
        <Text style={styles.address}>
          Registered Office: Hd-109 Cinnabar Hills, {"\n"}
          Links Business Park, Karnataka, India.
        </Text>
      </View>

      {/* Middle Section */}
      <View style={styles.middleBox}>
        <Text style={styles.contactLine}>
          <Text style={styles.boldLabel}>Phone:</Text> +91-9504061112
        </Text>
        <Text style={styles.contactLine}>
          <Text style={styles.boldLabel}>Email ID:</Text> Utkarsh@Vigovia.Com
        </Text>
        <Text style={styles.contactLine}>
          <Text style={styles.boldLabel}>CIN:</Text> U79110KA2024PTC191890
        </Text>
      </View>

      {/* Right Section */}
      <View style={styles.rightBox}>
        {/* Placeholder for logo */}
        <Image src="/assets/vigoviaLogo.png" style={styles.logo} />
        {/* <Text style={styles.tagline}>PLAN.PACK.GO</Text> */}
      </View>
    </View>
  );
};

export default FooterSection;
