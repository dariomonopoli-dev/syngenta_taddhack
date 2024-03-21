import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.dashboard}>
      <Pressable
        style={[styles.dashboardChild, styles.frameIconLayout]}
        onPress={() => navigation.navigate("DashboardOffline")}
      />
      <View style={[styles.raindrop7Parent, styles.raindrop7Layout]}>
        <Image
          style={[styles.raindrop7Icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
        <Image
          style={[styles.raindrop8Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
        <Image
          style={[styles.raindrop9Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
      </View>
      <View style={[styles.raindrop7Group, styles.uhr3Position]}>
        <Image
          style={[styles.raindrop7Icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
        <Image
          style={[styles.raindrop8Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
        <Image
          style={[styles.raindrop9Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
      </View>
      <Text style={styles.c}>18°C</Text>
      <Image
        style={styles.farmtest011Icon}
        contentFit="cover"
        source={require("../assets/farmtest01-1.png")}
      />
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={[styles.jetztWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.uhr3Typo}>jetzt</Text>
        </View>
        <View style={[styles.uhrWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.uhr3Typo}>{`06:30 Uhr `}</Text>
        </View>
        <View style={styles.frameChild} />
        <Text style={[styles.farmWeather, styles.warningsTypo]}>
          Farm Weather
        </Text>
        <View style={[styles.uhrContainer, styles.uhrPosition]}>
          <Text style={styles.uhr3Typo}>07:00 Uhr</Text>
        </View>

        <View style={[styles.uhrFrame, styles.uhrPosition]}>
          <Text style={styles.uhr3Typo}>07:30 Uhr</Text>
        </View>
      </View>
      <View style={[styles.lineParent, styles.parentLayout]}>
        <View style={[styles.frameItem, styles.framePosition]} />
        <View style={[styles.frameInner, styles.framePosition]} />
        <View style={[styles.lineView, styles.framePosition]} />
        <View style={[styles.frameChild1, styles.framePosition]} />
        <Text style={[styles.warnings, styles.warningsTypo]}>Warnings</Text>
        <Text style={[styles.uhr3, styles.uhr3Typo]}>06:30 Uhr</Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector-1.svg")}
        />
        <Text style={[styles.hiJohnAround, styles.hiFarmiTypo]}>
          Hi John, around noon the wind will pick up. Better to lower the
          pressure of your pumps on the fields!
        </Text>
        <View style={styles.frameChild2} />
        <View style={styles.frameChild3} />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-4.svg")}
        />
        <Text style={[styles.hiFarmi, styles.hiFarmiTypo]}>Hi Farmi...</Text>
      </View>
      <View style={styles.homeIndicator} />
      <Image
        style={styles.frameIconLayout}
        contentFit="cover"
        source={require("../assets/frame.svg")}
      />
      <View style={styles.dashboardInner}>
        <View style={[styles.ellipseParent, styles.groupChildPosition]}>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon-1.png")}
          />
        </View>
      </View>
      <View style={styles.raindrop1Parent}>
        <Image
          style={[styles.raindrop1Icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
        <Image
          style={[styles.raindrop2Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
        <Image
          style={[styles.raindrop3Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
        <Image
          style={[styles.raindrop4Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
        <Image
          style={[styles.raindrop5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
        <Image
          style={[styles.raindrop6Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/raindrop.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconLayout: {
    width: 393,
    height: 852,
  },
  raindrop7Layout: {
    height: 52,
    width: 84,
  },
  iconLayout3: {
    height: 27,
    left: 25,
    width: 20,
    position: "absolute",
  },
  iconLayout2: {
    height: 34,
    width: 25,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 43,
    width: 30,
    position: "absolute",
  },
  uhr3Position: {
    left: 17,
    position: "absolute",
  },
  parentLayout: {
    width: 365,
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 51,
    position: "absolute",
  },

  warningsTypo: {
    left: "3.56%",
    width: "40.82%",
    color: Color.colorSteelblue,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
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
  framePosition: {
    left: "3.42%",
    right: "3.97%",
    width: "92.6%",
    height: "0.38%",
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  uhr3Typo: {
    color: Color.colorSteelblue,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  hiFarmiTypo: {
    height: 16,
    fontFamily: FontFamily.imprimaRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  groupChildPosition: {
    height: 87,
    width: 87,
    top: 0,
    left: 0,
    position: "absolute",
  },
  dashboardChild: {
    backgroundColor: Color.colorLightcyan,
    left: 0,
    width: 393,
    top: 57,
    position: "absolute",
  },
  raindrop7Icon: {
    top: 0,
  },
  raindrop8Icon: {
    top: 18,
  },
  raindrop9Icon: {
    top: 9,
    left: 54,
    height: 43,
    width: 30,
  },
  raindrop7Parent: {
    top: 439,
    left: 302,
    position: "absolute",
  },
  raindrop7Group: {
    top: 279,
    height: 52,
    width: 84,
  },
  c: {
    top: 204,
    left: 19,
    fontSize: 64,
    width: 177,
    height: 63,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    position: "absolute",
  },
  farmtest011Icon: {
    top: 68,
    left: 143,
    width: 232,
    height: 232,
    position: "absolute",
  },
  jetztWrapper: {
    left: 32,
  },
  uhrWrapper: {
    left: 117,
  },

  frameChild: {
    height: "0.58%",
    width: "100.27%",
    top: "20.18%",
    right: "-0.41%",
    bottom: "79.24%",
    left: "0.14%",
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  farmWeather: {
    marginTop: -75.5,
    top: "50%",
    height: 18,
  },
  uhrContainer: {
    right: "18.9%",
    left: "60%",
  },

  uhrFrame: {
    right: "-10.68%",
    left: "89.59%",
  },

  frameParent: {
    top: 304,
    left: 18,
    height: 171,
  },
  frameItem: {
    top: "12.02%",
    bottom: "87.6%",
  },
  frameInner: {
    top: "24.62%",
    bottom: "75%",
  },
  lineView: {
    top: "37.21%",
    bottom: "62.4%",
  },
  frameChild1: {
    top: "49.81%",
    bottom: "49.81%",
  },
  warnings: {
    height: "6.87%",
    top: "4.2%",
  },
  uhr3: {
    top: 74,
    left: 17,
    position: "absolute",
  },
  lineParent: {
    top: 670,
    left: 16,
    height: 262,
  },
  rectangleView: {
    top: 15,
    left: 89,
    borderRadius: Border.br_8xs,
    width: 261,
    height: 55,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    top: 55,
    left: 79,
    width: 10,
    height: 6,
    position: "absolute",
  },
  hiJohnAround: {
    color: Color.colorBlack,
    width: 241,
    left: 99,
    top: 22,
  },
  frameChild2: {
    top: 102,
    left: -7,
    backgroundColor: Color.colorSteelblue,
    width: 370,
    height: 45,
    position: "absolute",
  },
  frameChild3: {
    top: 110,
    left: 104,
    backgroundColor: Color.colorGray_100,
    width: 216,
    height: 23,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupIcon: {
    top: 112,
    left: 76,
    height: 19,
    width: 20,
    position: "absolute",
  },
  hiFarmi: {
    top: 115,
    left: 114,
    width: 75,
    color: Color.colorWhite,
    fontFamily: FontFamily.imprimaRegular,
  },
  rectangleParent: {
    top: 500,
    left: 15,
    width: 363,
    height: 143,
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
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
  icon1: {
    top: 1,
    left: 2,
    width: 83,
    height: 83,
    position: "absolute",
  },
  ellipseParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  dashboardInner: {
    top: 490,
    left: 5,
    backgroundColor: Color.colorGray_200,
    width: 89,
    height: 90,
    position: "absolute",
    overflow: "hidden",
  },
  raindrop1Icon: {
    top: 8,
  },
  raindrop2Icon: {
    top: 26,
  },
  raindrop3Icon: {
    top: 17,
    left: 54,
    height: 43,
    width: 30,
  },
  raindrop4Icon: {
    left: 99,
    top: 0,
  },
  raindrop5Icon: {
    top: 35,
    left: 126,
  },
  raindrop6Icon: {
    top: 5,
    left: 156,
  },
  raindrop1Parent: {
    left: 154,
    width: 186,
    height: 78,
    top: 57,
    position: "absolute",
  },
  dashboard: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
    backgroundColor: Color.colorWhite,
  },
});

export default Dashboard;
