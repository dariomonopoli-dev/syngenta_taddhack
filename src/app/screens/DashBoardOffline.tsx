import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const DashboardOffline = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.dashboardoffline}>
      <Pressable
        style={[styles.dashboardofflineChild, styles.frameIconLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Image
        style={styles.farmtest011Icon}
        contentFit="cover"
        source={require("../assets/farmtest01-1.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={styles.frameChild} />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/vector-1.svg")}
        />
        <Text style={[styles.hiJohnAround, styles.hiFarmiTypo]}>
          Hi John, around noon the wind will pick up. Better to lower the
          pressure of your pumps on the fields!
        </Text>
        <View style={styles.frameInner} />
        <View style={[styles.rectangleView, styles.rectangleParentLayout]} />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-4.svg")}
        />
        <Text style={[styles.hiFarmi, styles.hiFarmiTypo]}>Hi Farmi...</Text>
      </View>
      <View style={[styles.ellipseParent, styles.rectangleParentLayout]}>
        <Text style={[styles.text, styles.textPosition]}>!</Text>
        <Text style={[styles.offlineUsageFarmiContainer, styles.textTypo]}>
          <Text style={styles.offlineUsage}>{`Offline Usage `}</Text>
          <Text style={styles.farmiIsThere}>
            Farmi is there to help you, ask him anything. Information will be
            synchronized with your online profile.
          </Text>
        </Text>
      </View>
      <View style={styles.homeIndicator} />
      <Image
        style={styles.frameIconLayout}
        contentFit="cover"
        source={require("../assets/frame.svg")}
      />
      <Image
        style={styles.statusBarIcon}
        contentFit="cover"
        source={require("../assets/status-bar.png")}
      />
      <View style={styles.dashboardofflineInner}>
        <View style={[styles.ellipseGroup, styles.groupPosition]}>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconLayout: {
    width: 393,
    height: 852,
  },
  rectangleParentLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  hiFarmiTypo: {
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.imprimaRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textPosition: {
    top: 12,
    height: 26,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.imprimaRegular,
  },
  groupPosition: {
    height: 87,
    width: 87,
    top: 0,
    left: 0,
    position: "absolute",
  },
  dashboardofflineChild: {
    top: 57,
    backgroundColor: Color.colorLightcyan,
    left: 0,
    width: 393,
    position: "absolute",
  },
  farmtest011Icon: {
    top: 125,
    left: 77,
    width: 232,
    height: 232,
    position: "absolute",
  },
  frameChild: {
    top: 15,
    left: 89,
    borderRadius: Border.br_8xs,
    width: 261,
    height: 55,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  frameItem: {
    top: 55,
    left: 79,
    width: 10,
    height: 6,
    position: "absolute",
  },
  hiJohnAround: {
    left: 99,
    width: 241,
    color: Color.colorBlack,
    top: 22,
  },
  frameInner: {
    top: 102,
    left: -7,
    backgroundColor: Color.colorSteelblue,
    width: 370,
    height: 45,
    position: "absolute",
  },
  rectangleView: {
    top: 110,
    left: 104,
    backgroundColor: Color.colorGray_100,
    width: 216,
    height: 23,
  },
  groupIcon: {
    top: 112,
    left: 76,
    width: 20,
    height: 19,
    position: "absolute",
  },
  hiFarmi: {
    top: 115,
    left: 114,
    color: Color.colorWhite,
    width: 75,
  },
  ellipseIcon: {
    top: 109,
    left: 328,
    height: 26,
    width: 26,
    position: "absolute",
  },
  rectangleParent: {
    top: 378,
    left: 15,
    backgroundColor: Color.colorAliceblue_100,
    width: 363,
    height: 143,
    overflow: "hidden",
  },
  frameChild1: {
    left: 21,
    width: 26,
    top: 12,
  },
  text: {
    left: 31,
    fontSize: 24,
    color: Color.colorSteelblue,
    width: 12,
    textAlign: "left",
    fontFamily: FontFamily.imprimaRegular,
  },
  offlineUsage: {
    fontSize: FontSize.size_xs,
  },
  farmiIsThere: {
    fontSize: 10,
  },
  offlineUsageFarmiContainer: {
    top: 6,
    left: 69,
    width: 276,
    color: Color.colorBlack,
    position: "absolute",
  },
  ellipseParent: {
    top: 84,
    left: 18,
    backgroundColor: "#aec9d1",
    width: 360,
    height: 50,
    overflow: "hidden",
  },
  homeIndicator: {
    top: 838,
    left: 130,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
    position: "absolute",
  },
  statusBarIcon: {
    left: 55,
    width: 302,
    height: 12,
    top: 22,
    position: "absolute",
  },
  icon1: {
    top: 1,
    left: 2,
    width: 83,
    height: 83,
    position: "absolute",
  },
  ellipseGroup: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  dashboardofflineInner: {
    top: 335,
    left: 5,
    backgroundColor: Color.colorGray_200,
    width: 89,
    height: 90,
    position: "absolute",
    overflow: "hidden",
  },
  dashboardoffline: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
    backgroundColor: Color.colorWhite,
  },
});

export default DashboardOffline;
