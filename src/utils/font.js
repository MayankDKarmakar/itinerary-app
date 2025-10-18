// src/pdf/fonts.js
import { Font } from "@react-pdf/renderer";

// Register Poppins
Font.register({
  family: "Poppins",
  fonts: [
    { src: "/fonts/Poppins/Poppins-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/Poppins/Poppins-SemiBold.ttf", fontWeight: 600 },
    { src: "/fonts/Poppins/Poppins-Bold.ttf", fontWeight: 700 },
  ],
});

// Register Red Rose
Font.register({
  family: "RedRose",
  fonts: [
    { src: "/fonts/RedRose/RedRose-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/RedRose/RedRose-Bold.ttf", fontWeight: 700 },
  ],
});

// Register Roboto
Font.register({
  family: "Roboto",
  fonts: [
    { src: "/fonts/Roboto/Roboto-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/Roboto/Roboto-Light.ttf", fontWeight: 300 },
    { src: "/fonts/Roboto/Roboto-Bold.ttf", fontWeight: 700 },
  ],
});
