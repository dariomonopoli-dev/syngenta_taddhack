import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

type Message = {
  author: "user" | "bot";
  content: string;
};

const bot_messages = [
  "Hi Pedro! I have an urgent weather update: Expect a moderate breeze up to 25 km/h within the next hour. It's best to reschedule today's pesticide spraying to tomorrow for better safety and effectiveness.",
  "Good choice. Note: light rain is forecasted from 22:00-01:00. Please adjust the watering volume to accommodate the expected rainfall.  ",
];

const DashboardOffline = () => {
  const [message, setMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState<Message[]>([]);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const sendIcon = require("../assets/polygon-1.svg");

  React.useEffect(() => {
    const firstBotMessage = bot_messages[0];
    if (firstBotMessage) {
      setMessageList((prevMessages: any) => [
        ...prevMessages,
        { author: "bot", content: firstBotMessage },
      ]);
      scrollToBottom();
    }
  }, []);

  const FLASK_SERVER_URL = "http://localhost:9000/sms";

  const sendMessageToFlask = async (userMessage: string | number | boolean) => {
    try {
      let response = await fetch(FLASK_SERVER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `Body=${encodeURIComponent(userMessage)}`,
      });
      let responseText = await response.text();
      console.log(responseText); // Here you can handle the response
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newUserMessage: Message = { author: "user", content: message };
      setMessageList((prevMessages: any) => [...prevMessages, newUserMessage]);
      setMessage("");
      scrollToBottom();

      const goodIdeaMessage = bot_messages[1];
      if (goodIdeaMessage) {
        setTimeout(() => {
          setMessageList((prevMessages: any) => [
            ...prevMessages,
            { author: "bot", content: goodIdeaMessage },
          ]);
          scrollToBottom();
          sendMessageToFlask(message);
        }, 5000);
      }
    }
  };

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <KeyboardAvoidingView
      style={styles.dashboardoffline}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.dashboardoffline}>
          <Image
            style={styles.farmtest011Icon}
            source={require("../assets/farmtest01-1.png")}
          />
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <ScrollView
              ref={scrollViewRef}
              style={styles.messageArea}
              onContentSizeChange={scrollToBottom}
              contentContainerStyle={{ maxHeight: 450 }}
            >
              {messageList.map((msg, index) => (
                <View
                  key={index}
                  style={[
                    styles.messageBubble,
                    msg.author === "bot" ? styles.botBubble : styles.userBubble,
                  ]}
                >
                  <Text>{msg.content}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.frameInner} />
            <TextInput
              style={[styles.hiFarmi, styles.hiFarmiTypo]}
              placeholder="Hi Farmi ..."
              value={message}
              onChangeText={setMessage}
              onSubmitEditing={handleSendMessage}
              placeholderTextColor={Color.colorWhite}
            />
            <Pressable style={styles.sendButton2} onPress={handleSendMessage}>
              <Image source={sendIcon} style={styles.sendIcon} />
            </Pressable>
          </View>

          <View style={[styles.ellipseParent, styles.rectangleParentLayout]}>
            <Text style={[styles.text, styles.textPosition]}>!</Text>
            <Text style={[styles.offlineUsageFarmiContainer, styles.textTypo]}>
              <Text style={styles.offlineUsage}>{`Offline Usage `}</Text>
              <Text style={styles.farmiIsThere}>
                Farmi is there to help you, ask him anything. Information will
                be synchronized with your online profile.
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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

  hiJohnAround: {
    right: 10,
    left: 99,
    width: 241,
    color: Color.colorBlack,
    top: 22,
  },
  frameInner: {
    top: 290,
    left: 2,
    backgroundColor: Color.colorSteelblue,
    width: 370,
    height: 45,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  rectangleView: {
    top: 110,
    left: 104,
    backgroundColor: Color.colorWhite,
    width: 216,
    height: 23,
  },
  hiFarmi: {
    top: 40,
    left: 140,
    color: Color.colorWhite,
    zIndex: 1,
  },
  rectangleParent: {
    top: 378,
    left: 15,
    backgroundColor: Color.colorAliceblue_100,

    width: "100%",
    height: 280,
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
  },
  icon1: {
    top: 0,
    left: 2,
    width: 83,
    height: 83,
  },
  ellipseGroup: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
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
    transform: [{ translateX: 10 }, { translateY: -100 }],
  },
  ellipseGroupPoly: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
    top: 50,
  },

  dashboardoffline: {
    flex: 1,
    backgroundColor: Color.colorLightcyan,
    justifyContent: "center",
    alignItems: "stretch",
  },
  sendButton: {
    padding: 10,
    zIndex: 1000,
  },
  messageArea: {
    flex: 1,
    padding: 10,
    height: 500,
  },
  messageBubble: {
    borderRadius: 20,
    padding: 10,
    marginTop: 5,
    maxWidth: "75%",
  },

  userBubble: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
    marginRight: 10,
  },
  botBubble: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 5,
    alignSelf: "center",
    zIndex: 10000,
    borderWidth: 1,
  },
  sendButton2: {
    position: "absolute",
    right: 30,
    bottom: 5,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    top: 295,
    backgroundColor: "#D6F5FF",
    borderRadius: 50,
    width: 35,
  },

  sendIcon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
    position: "absolute",
    right: 9,
  },
});

export default DashboardOffline;
