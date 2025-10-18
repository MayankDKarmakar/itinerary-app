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
// import gradientBg from "../assets/gradient_1200_800.png";
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

const styles = StyleSheet.create({
  // ====== FOOTER ======
  footerContainer: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
    borderTopWidth: 1,
    borderTopColor: "#D3D3D3",
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLeft: { flexDirection: "column" },
  footerRight: { flexDirection: "column", alignItems: "flex-end" },
  footerText: { fontSize: 8, color: "#666" },
  footerLink: { fontSize: 8, color: "#4A2ECC" },
  footerTagline: { fontSize: 8, color: "#4A2ECC", fontWeight: 600 },
});

const FooterSection = ({ data }) => (
  <View style={styles.footerContainer} fixed>
    <View style={styles.footerLeft}>
      <Text style={styles.footerText}>Vigovia Tech Pvt. Ltd</Text>
      <Text style={styles.footerText}>
        Hd-109 Cinnabar Hills, Links Business Park, Karnataka, India
      </Text>
      <Text style={styles.footerText}>CIN: U79110KA2024PTC191890</Text>
    </View>

    <View style={styles.footerRight}>
      <Text style={styles.footerText}>Phone: +91-9504061112</Text>
      <Text style={styles.footerText}>Email: Utkarsh@Vigovia.com</Text>
      <Text style={styles.footerTagline}>vigovia</Text>
    </View>
  </View>
);

export default FooterSection;
