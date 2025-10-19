// ItineraryHeaderSection.jsx
import React from "react";
import "../../utils/font";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
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
  // ====== DAY TIMELINE ======
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 20,
    // marginTop: 2,
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#C5C5C5",
    height: 161,
    width: "100%",
    // backgroundColor: "red",
  },
  dayLeftBar: {
    width: 35,
    height: "100%",
    backgroundColor: COLORS.purpleTxt,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  dayNumber: {
    fontSize: 10,
    color: "#fff",
    transform: "rotate(-90deg)",
    fontWeight: 600,
  },
  dayRightContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginLeft: 35,
    gap: 35,
    paddingTop: 10,
    paddingBottom: 10,
  },
  dayTopRow: {
    flexDirection: "coloumn",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    // backgroundColor: "red",
  },
  dayImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    objectFit: "cover",
    // marginRight: 15,
  },
  dayInfo: {
    flexDirection: "column",
    alignItems: "center",
  },
  dayDate: {
    fontSize: 10,
    fontWeight: 600,
    color: "#333",
    marginBottom: 2,
  },
  dayTitle: {
    fontSize: 9,
    color: "#666",
  },

  timeline: {
    height: 170,
    marginTop: 10,
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: 20,
    gap: 10,
    flex: 1,
    fontSize: 9,
    color: "#333",
    // backgroundColor: "red",
  },
  timelineRow: {
    flexDirection: "row",

    justifyContent: "space-between",
    // alignItems: "flex-start",
    marginBottom: 4,
  },
  timeLabel: {
    width: 60,
    fontWeight: 600,
  },
  bullet: { marginRight: 4 },
  activityCont: { flex: 1 },
  activityTextCont: { flexDirection: "row" },
  activityText: { lineHeight: 0.7 },
});

const DayTimelineSection = ({ days }) => (
  <>
    {days.map((day, i) => (
      <View key={day.id} style={styles.dayContainer} wrap={false}>
        {/* LEFT VERTICAL BAR */}
        <View style={styles.dayLeftBar}>
          <Text style={styles.dayNumber}>Day {i + 1}</Text>
        </View>

        {/* RIGHT CONTENT */}
        <View style={styles.dayRightContent}>
          <View style={styles.dayTopRow}>
            <Image
              src="https://picsum.photos/200/200" //we will replace later with actual day image URL
              style={styles.dayImage}
            />
            <View style={styles.dayInfo}>
              <Text style={styles.dayDate}>{day.date}</Text>
              <Text style={styles.dayTitle}>{day.title}</Text>
            </View>
          </View>

          <View style={styles.timeline}>
            {Object.entries({
              Morning: day.morning,
              Afternoon: day.afternoon,
              Evening: day.evening,
            }).map(([time, acts]) => (
              <View key={time} style={styles.timelineRow}>
                <Text style={styles.timeLabel}>{time}</Text>
                <View style={styles.activityCont}>
                  {acts.map((activity, idx) => (
                    <View style={styles.activityTextCont}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.activityText} key={idx}>
                        {activity}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    ))}
  </>
);

export default DayTimelineSection;
