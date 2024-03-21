import * as React from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const DashboardOffline = () => {
  const [message, setMessage] = React.useState("");

  const sendMessage = () => {
    // the message is sent to the model
    console.log("Message sent:", message);
    // Add the code to send the message or perform any action
    setMessage(""); // Clear the input after sending the message
    return;
  };

  return (
    <View style={styles.dashboardoffline}>
      <Image
        style={styles.farmtest011Icon}
        contentFit="cover"
        source={require("../assets/farmtest01-1.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={styles.frameChild} />
        <Text style={[styles.hiJohnAround, styles.hiFarmiTypo]}>
          Hi John, around noon the wind will pick up. Better to lower the
          pressure of your pumps on the fields!
        </Text>
        <View style={styles.frameInner} />
        <View style={[styles.rectangleView, styles.rectangleParentLayout]} />
        <TextInput
          style={[styles.hiFarmi, styles.hiFarmiTypo]} // You may need to adjust styles for TextInput
          placeholder="Type your message..." // placeholder text
          value={message} // Controlled value
          onChangeText={setMessage} // Update state on change
          onSubmitEditing={sendMessage} // Call sendMessage when the user submits the input
        />
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
  rectangleParentLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  hiFarmiTypo: {
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.imprimaRegular,
    fontSize: FontSize.size_xs,
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
    backgroundColor: Color.colorLightcyan,
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
    // Increase this height if you expect the text to wrap into multiple lines
    height: 55,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    padding: 10, // Add some padding to contain the text nicely
  },
  hiJohnAround: {
    right: 10,
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
  hiFarmi: {
    top: 97,
    left: 114,
    color: Color.colorWhite,
    zIndex: 1,
  },
  rectangleParent: {
    top: 378,
    left: 15,
    backgroundColor: Color.colorAliceblue_100,

    width: 363,
    height: 143,
    borderRadius: 10,
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
    borderRadius: Border.br_3xs,
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
  icon1: {
    top: 1,
    left: 2,
    width: 83,
    height: 83,
    position: "absolute",
  },
  ellipseGroup: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    // Make it round
    borderRadius: 50, // half of the width/height
    // Center the icon inside the circle
    justifyContent: "center",
    alignItems: "center",
    // Apply shadow and other properties as needed
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
    transform: [
      { translateX: 10 }, // Move 20 pixels to the right
      { translateY: -70 }, // Move 10 pixels down
    ],
  },
  dashboardoffline: {
    flex: 1,
    backgroundColor: Color.colorLightcyan,
    justifyContent: "center",
    alignItems: "stretch",
  },
});

export default DashboardOffline;
