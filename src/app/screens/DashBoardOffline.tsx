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
  "Hi Pedro! Urgent weather update: Expect a moderate breeze up to 25 km/h within the next hour. It's best to reschedule today's pesticide spraying to tomorrow for better safety and effectiveness.",
  "Good choice. Note: light rain is forecasted from 22:00-01:00. Please adjust the watering volume to accommodate the expected rainfall.  ",
];
const user_messages = [""];
const order = ["bot", "bot", "user", "bot"];

const DashboardOffline = () => {
  const [message, setMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState<Message[]>([]);
  const scrollViewRef = React.useRef<ScrollView>(null);

  React.useEffect(() => {
    // The timeout ID for the first message, so we can clear it when unmounting
    let firstMessageTimeoutId: NodeJS.Timeout;

    // Function to display the first bot message after 15 seconds
    firstMessageTimeoutId = setTimeout(() => {
      const firstBotMessage = bot_messages[0];
      setMessageList((prevMessages) => [
        ...prevMessages,
        { author: "bot", content: firstBotMessage },
      ]);
      scrollToBottom();

      // Function to display the second bot message 5 seconds after the first
      setTimeout(() => {
        const secondBotMessage = bot_messages[1];
        setMessageList((prevMessages) => [
          ...prevMessages,
          { author: "bot", content: secondBotMessage },
        ]);
        scrollToBottom();
      }, 10000); // 5 seconds after the first message
    }, 10000); // 15 seconds after component mounts

    // Cleanup function for the first timeout when the component is unmounted or if the effect re-runs
    return () => {
      clearTimeout(firstMessageTimeoutId);
    };
  }, []); // The empty array ensures this effect is only run once on component mount

  const handleSendMessage = () => {
    if (message.trim()) {
      // Send the user's message
      const newMessage: Message = { author: "user", content: message };
      setMessageList((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
      scrollToBottom();

      // If there are remaining bot messages (specifically the third one)
      if (bot_messages.length >= 3) {
        // Send the third bot message
        const botMessageContent = bot_messages[2]; // Assuming index 2 is your third message
        // Add the bot's message to the message list with a delay of 5 seconds
        setTimeout(() => {
          setMessageList((prevMessages) => [
            ...prevMessages,
            { author: "bot", content: botMessageContent },
          ]);
          scrollToBottom();
        }, 5000); // Adjust the timeout as necessary
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
            contentFit="cover"
            source={require("../assets/farmtest01-1.png")}
          />
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <ScrollView
              ref={scrollViewRef}
              style={styles.messageArea}
              onContentSizeChange={scrollToBottom}
              // Here we set a maxHeight for your ScrollView
              contentContainerStyle={{ maxHeight: 450 }}
            >
              {/* Removed extra <View>, not clear on its purpose */}
              {messageList.map((msg, index) => (
                <View
                  key={index}
                  style={[
                    styles.messageBubble,
                    msg.author === "bot" ? styles.botBubble : styles.userBubble,
                  ]}
                >
                  <Text style={styles.messageBubbleText}>{msg.content}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.frameInner} />
            {/* TextInput and Send button will stay the same */}
            <TextInput
              style={[styles.hiFarmi, styles.hiFarmiTypo]}
              placeholder="Hi Farmi ..."
              value={message}
              onChangeText={setMessage}
              onSubmitEditing={handleSendMessage} // modified to call sendMessage when you submit the input
            />
            <Pressable
              style={styles.sendButton}
              onPress={handleSendMessage} // Use the button to send message
            ></Pressable>
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
    top: 280,
    left: 2,
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
    top: 50,
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
      { translateY: -90 }, // Move 10 pixels down
    ],
  },
  dashboardoffline: {
    flex: 1,
    backgroundColor: Color.colorLightcyan,
    justifyContent: "center",
    alignItems: "stretch",
  },
  sendButton: {
    padding: 10, // Add padding to increase touchable area
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
  messageBubbleText: {
    // This will be the text inside your bubble
    // You could add different text styling here
  },

  userBubble: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
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
});

export default DashboardOffline;
