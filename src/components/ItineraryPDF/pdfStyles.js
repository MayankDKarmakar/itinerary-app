import { StyleSheet } from "@react-pdf/renderer";

export const COLORS = {
  primary: "#5b2b8a",
  accent1: "#4BA1EB",
  accent2: "#936FE0",
  accent3: "#F3E5F5",
  textHighLit: "#680099",
  border: "#C5C5C5",
  purpleTxt: "#342766",
  purpleTxt2: "#321E5D",
  btnColor: "#541C9C",
  text: "#000",
  muted: "#777",
};

export const COMMON = {
  COLUMN_GAP: 6,
  BORDER_RADIUS: 20,
};

export const pdfStyles = StyleSheet.create({
  // ===== SECTION WRAPPER =====
  section: {
    marginTop: 20,
  },

  // ===== TITLE =====
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

  // ===== TABLE STRUCTURE =====
  table: {
    width: "100%",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // ===== HEADER CELL =====
  headerCell: {
    backgroundColor: COLORS.purpleTxt,
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: 600,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderTopLeftRadius: COMMON.BORDER_RADIUS,
    borderTopRightRadius: COMMON.BORDER_RADIUS,
    marginRight: COMMON.COLUMN_GAP,
  },
  lastHeaderCell: {
    marginRight: 0,
  },

  // ===== DATA CELL =====
  cell: {
    fontSize: 9,
    color: COLORS.text,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: COLORS.accent3,
    marginRight: COMMON.COLUMN_GAP,
  },
  lastCell: {
    marginRight: 0,
  },
  bottomRoundedCell: {
    borderBottomLeftRadius: COMMON.BORDER_RADIUS,
    borderBottomRightRadius: COMMON.BORDER_RADIUS,
  },

  // ===== NOTE TEXT =====
  noteContainer: {
    marginTop: 15,
  },
  noteText: {
    marginBottom: 5,
    fontSize: 8,
    color: COLORS.text,
    lineHeight: 1.4,
  },

  //   divider: {
  //     marginTop: 15,
  //     borderBottomWidth: 1,
  //     borderBottomColor: COLORS.border,
  //   },
});
