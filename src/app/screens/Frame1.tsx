import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={styles.lineParent}>
      <View style={[styles.frameChild, styles.framePosition]} />
      <View style={[styles.frameItem, styles.framePosition]} />
      <View style={[styles.frameInner, styles.framePosition]} />
      <View style={[styles.lineView, styles.framePosition]} />
      <Text style={[styles.warnings, styles.uhrTypo]}>Warnings</Text>
      <Text style={[styles.uhr, styles.uhrTypo]}>06:30 Uhr</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: "3.42%",
    right: "3.97%",
    width: "92.6%",
    height: "0.38%",
    position: "absolute",
  },
  uhrTypo: {
    textAlign: "left",
    color: Color.colorSteelblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  frameChild: {
    top: "12.02%",
    bottom: "87.6%",
  },
  frameItem: {
    top: "24.62%",
    bottom: "75%",
  },
  frameInner: {
    top: "37.21%",
    bottom: "62.4%",
  },
  lineView: {
    top: "49.81%",
    bottom: "49.81%",
  },
  warnings: {
    height: "6.87%",
    width: "40.82%",
    top: "4.2%",
    left: "3.56%",
  },
  uhr: {
    top: 74,
    left: 17,
  },
  lineParent: {
    backgroundColor: Color.colorAliceblue_100,
    flex: 1,
    width: "100%",
    height: 262,
    overflow: "hidden",
  },
});

export default Frame1;
