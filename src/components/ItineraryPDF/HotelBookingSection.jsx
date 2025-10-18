import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const COLORS = {
  primary: "#5b2b8a",
  accent3: "#F3E5F5",
  textHighLit: "#680099",
  border: "#C5C5C5",
  purpleTxt: "#342766",
  text: "#000",
  muted: "#777",
};

const COLUMN_GAP = 6;
const BORDER_RADIUS = 20;

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
  },

  // Title
  titleRow: {
    marginBottom: 10,
    flexDirection: "row",
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: COLORS.text,
  },
  titleHighlight: {
    color: COLORS.textHighLit,
  },

  // Table
  table: {
    width: "100%",
  },

  // Header Row
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerCell: {
    backgroundColor: COLORS.purpleTxt,
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: 600,
    textAlign: "center",
    // paddingVertical: 6,
    padding: 10,

    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    marginRight: COLUMN_GAP,
  },
  lastHeaderCell: {
    marginRight: 0,
  },

  // Data rows
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cell: {
    fontSize: 9,
    color: COLORS.text,
    textAlign: "center",
    // paddingVertical: 6,
    padding: 10,
    backgroundColor: COLORS.accent3,
    marginRight: COLUMN_GAP,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: COLORS.border,
  },
  lastCell: {
    marginRight: 0,
  },

  // Bottom rounding for last row
  bottomRoundedCell: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },

  // Notes
  noteContainer: {
    marginTop: 15,
  },
  noteText: {
    marginBottom: 5,
    fontSize: 8,
    color: COLORS.text,
    lineHeight: 1.4,
  },
  divider: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
});

const HotelBookingSection = ({ bookings = [] }) => {
  // Define each column with custom flex widths
  const columns = [
    { header: "City", key: "city", flex: 1.2 },
    { header: "Check In", key: "checkIn", flex: 1 },
    { header: "Check Out", key: "checkOut", flex: 1 },
    { header: "Nights", key: "nights", flex: 0.6 },
    { header: "Hotel Name", key: "hotelName", flex: 2 },
  ];

  return (
    <View style={styles.section} wrap={false}>
      {/* Title */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>
          Hotel <Text style={styles.titleHighlight}>Bookings</Text>
        </Text>
      </View>

      {/* Header Row */}
      <View style={styles.headerRow}>
        {columns.map((col, idx) => (
          <Text
            key={col.key}
            style={[
              styles.headerCell,
              { flex: col.flex }, //dynamic width
              idx === columns.length - 1 && styles.lastHeaderCell,
            ]}
          >
            {col.header}
          </Text>
        ))}
      </View>

      {/* Data Rows */}
      {bookings.map((item, rowIndex) => {
        const isLastRow = rowIndex === bookings.length - 1;
        return (
          <View key={rowIndex} style={styles.row}>
            {columns.map((col, colIndex) => (
              <Text
                key={col.key}
                style={[
                  styles.cell,
                  { flex: col.flex }, //dynamic width
                  colIndex === columns.length - 1 && styles.lastCell,
                  isLastRow && styles.bottomRoundedCell, // rounded bottom
                ]}
                maxLines={2} // wraps long text like hotel names
              >
                {item[col.key]}
              </Text>
            ))}
          </View>
        );
      })}

      {/* Notes */}
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>
          1. All Hotels Are Tentative And Can Be Replaced With Similar.
        </Text>
        <Text style={styles.noteText}>
          2. Breakfast Included For All Hotel Stays.
        </Text>
        <Text style={styles.noteText}>
          3. All Hotels Will Be 4* And Above Category.
        </Text>
        <Text style={styles.noteText}>
          4. A maximum occupancy of 2 people/room is allowed in most hotels.
        </Text>
      </View>

      <View style={styles.divider} />
    </View>
  );
};

export default HotelBookingSection;
