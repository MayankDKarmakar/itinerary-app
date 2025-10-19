import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { pdfStyles as styles, COLORS } from "./pdfStyles";

// A single universal table-based PDF section
const InfoTableSection = ({
  title, // Section title (e.g., "Hotel")
  highlight, // Highlighted word (e.g., "Bookings")
  columns = [], // [{ header, key, flex }]
  data = [], // dynamic array of objects
  notes = [], // optional notes array
  footerNote = null, // optional footer { title, text }
}) => (
  <View style={styles.section} wrap={false}>
    {/* ===== Section Title ===== */}
    <View style={styles.titleRow}>
      <Text style={styles.title}>
        {title} <Text style={styles.titleHighlight}>{highlight}</Text>
      </Text>
    </View>

    {/* ===== Table Header ===== */}
    <View style={styles.headerRow}>
      {columns.map((col, idx) => (
        <Text
          key={col.key || col.header}
          style={[
            styles.headerCell,
            { flex: col.flex || 1 },
            idx === columns.length - 1 && styles.lastHeaderCell,
          ]}
        >
          {col.header}
        </Text>
      ))}
    </View>

    {/* ===== Data Rows ===== */}
    {data.length > 0 ? (
      data.map((item, rowIndex) => {
        const isLastRow = rowIndex === data.length - 1;
        return (
          <View key={rowIndex} style={styles.row}>
            {columns.map((col, colIndex) => (
              <Text
                key={`${col.key}-${rowIndex}`}
                style={[
                  styles.cell,
                  { flex: col.flex || 1 },
                  colIndex === columns.length - 1 && styles.lastCell,
                  isLastRow && styles.bottomRoundedCell,
                ]}
                maxLines={3}
              >
                {item[col.key] ?? "-"}
              </Text>
            ))}
          </View>
        );
      })
    ) : (
      // If no data available
      <View style={styles.row}>
        <Text
          style={[
            styles.cell,
            { flex: 1, textAlign: "center" },
            styles.bottomRoundedCell,
          ]}
        >
          No records found.
        </Text>
      </View>
    )}

    {/* ===== Optional Notes ===== */}
    {notes?.length > 0 && (
      <View style={styles.noteContainer}>
        {notes.map((line, idx) => (
          <Text key={idx} style={styles.noteText}>
            {idx + 1}. {line}
          </Text>
        ))}
      </View>
    )}

    {/* ===== Optional Footer Note ===== */}
    {footerNote && (
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 9,
            fontWeight: 600,
            color: COLORS.text,
            marginBottom: 2,
          }}
        >
          {footerNote.title}
        </Text>
        <Text style={{ fontSize: 8, color: COLORS.text, lineHeight: 1.3 }}>
          {footerNote.text}
        </Text>
      </View>
    )}

    {/* Divider */}
    <View style={styles.divider} />
  </View>
);

export default InfoTableSection;
