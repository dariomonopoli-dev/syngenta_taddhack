import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.jetztWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.jetztTypo}>jetzt</Text>
      </View>
      <View style={[styles.uhrWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.jetztTypo}>{`06:30 Uhr `}</Text>
      </View>
      {/*<Image
        style={[styles.placeholderIcon, styles.placeholderIconLayout]}
        contentFit="cover"
        source={require("../assets/placeholder1.png")}
      />
      <Image
        style={[styles.placeholderIcon1, styles.placeholderIconPosition]}
        contentFit="cover"
        source={require("../assets/placeholder1.png")}
      />
  */}
      <View style={styles.frameChild} />
      <Text style={[styles.recommendations, styles.jetztTypo]}>
        Recommendations
      </Text>
      <View style={[styles.uhrContainer, styles.uhrPosition]}>
        <Text style={styles.jetztTypo}>07:00 Uhr</Text>
      </View>
      {/*}
      <Image
        style={[styles.placeholderIcon2, styles.placeholderIconPosition]}
        contentFit="cover"
        source={require("../assets/placeholder1.png")}
      />
      <Image
        style={[styles.placeholderIcon3, styles.placeholderIconLayout]}
        contentFit="cover"
        source={require("../assets/placeholder1.png")}
      />
*/}
      <View style={[styles.uhrFrame, styles.uhrPosition]}>
        <Text style={styles.jetztTypo}>07:30 Uhr</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 51,
    position: "absolute",
  },
  placeholderIconLayout: {
    height: 53,
    width: 47,
    position: "absolute",
  },
  placeholderIconPosition: {
    top: 93,
    height: 53,
    width: 47,
    position: "absolute",
  },
  jetztTypo: {
    textAlign: "left",
    color: Color.colorSteelblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  uhrPosition: {
    bottom: "49.71%",
    top: "29.82%",
    width: "21.1%",
    height: "20.47%",
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  jetztWrapper: {
    left: 32,
  },
  uhrWrapper: {
    left: 117,
  },
  placeholderIcon: {
    top: 94,
    left: 31,
  },
  placeholderIcon1: {
    left: 132,
  },
  frameChild: {
    height: "0.58%",
    width: "100.27%",
    top: "20.18%",
    right: "-0.41%",
    bottom: "79.24%",
    left: "0.14%",
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    position: "absolute",
  },
  recommendations: {
    marginTop: -75.5,
    width: "40.82%",
    top: "50%",
    left: "3.56%",
    height: 18,
    position: "absolute",
  },
  uhrContainer: {
    right: "18.9%",
    left: "60%",
  },
  placeholderIcon2: {
    left: 233,
  },
  placeholderIcon3: {
    top: 92,
    left: 334,
  },
  uhrFrame: {
    right: "-10.68%",
    left: "89.59%",
  },
  frameParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorAliceblue_100,
    flex: 1,
    width: "100%",
    height: 171,
    overflow: "hidden",
  },
});

export default Frame;
