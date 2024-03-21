import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Padding,
  Border,
  Color,
  FontSize,
  FontFamily,
} from "../../GlobalStyles";

const Widget = () => {
  return (
    <View style={styles.widget}>
      <View style={styles.widgetChild} />
      <Image
        style={styles.raindrop7Icon}
        contentFit="cover"
        source={require("../assets/raindrop-7.png")}
      />
      <Image
        style={[styles.raindrop8Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/raindrop-8.png")}
      />
      <Image
        style={[styles.raindrop9Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/raindrop-9.png")}
      />
      <View style={[styles.uhrWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.uhr}>07:00 Uhr</Text>
      </View>
      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
        <Text style={styles.uhr}>08:0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    bottom: "82.18%",
    display: "none",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    bottom: "50%",
    top: "29.89%",
    width: "21.1%",
    height: "20.11%",
    position: "absolute",
  },
  widgetChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorAliceblue_100,
    position: "absolute",
  },
  raindrop7Icon: {
    height: "15.52%",
    width: "5.48%",
    top: "-12.07%",
    right: "89.86%",
    bottom: "96.55%",
    left: "4.66%",
    display: "none",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  raindrop8Icon: {
    height: "19.54%",
    width: "6.85%",
    top: "-1.72%",
    right: "95.34%",
    left: "-2.19%",
  },
  raindrop9Icon: {
    height: "24.71%",
    width: "8.22%",
    top: "-6.9%",
    right: "79.18%",
    left: "12.6%",
  },
  uhr: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorSteelblue,
    textAlign: "left",
  },
  uhrWrapper: {
    right: "19.18%",
    left: "59.73%",
  },
  wrapper: {
    right: "-3.56%",
    left: "82.47%",
  },
  widget: {
    width: 365,
    height: 174,
  },
});

export default Widget;
