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
  "Hi John, around noon the wind will pick up. Better to lower the pressure of your pumps on the fields!",
  "Hi Pedro! Urgent weather update: Expect a moderate breeze up to 25 km/h within the next hour. It's best to reschedule today's pesticide spraying to tomorrow for better safety and effectiveness.",
  "Good choice. Note: light rain is forecasted from 22:00-01:00. Please adjust the watering volume to accommodate the expected rainfall.  ",
];
const user_messages = ["Thanks, I'll water field 10 instead."];
const order = ["bot", "bot", "user", "bot"];

const DashboardOffline = () => {
  const [message, setMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState<Message[]>([]);
  const scrollViewRef = React.useRef<ScrollView>(null);

  const [startConversation, setStartConversation] = React.useState(false);

  const sendLastBotMessage = () => {
    if (bot_messages.length > 0) {
      // We make sure that there is a bot message to send
      const content = bot_messages.pop() || ""; // Get the last bot message or use an empty string if undefined

      setMessageList((prevMessages) => [
        ...prevMessages,
        { author: "bot", content },
      ]);

      scrollToBottom();
    }
  };

  React.useEffect(() => {
    if (startConversation) {
      let index = 0; // Start from the first message
      const messageTimer = setInterval(() => {
        if (index < order.length) {
          // Explicitly stating the type to match 'Message' type
          const author: "user" | "bot" = order[index] as "user" | "bot";
          const content =
            author === "bot"
              ? bot_messages.shift() // Get the next bot message
              : user_messages.shift(); // Get the next user message

          if (content) {
            setMessageList((prevMessages) => [
              ...prevMessages,
              { author, content }, // TypeScript now knows `author` is either 'user' or 'bot'
            ]);
            scrollToBottom();
          }

          index++;
        } else {
          clearInterval(messageTimer); // End the interval once all messages have been displayed
        }
      }, 5000); // Simulate a delay between messages

      return () => clearInterval(messageTimer); // Clean up on unmount
    }
  }, [startConversation]);

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  const sendMessage = () => {
    if (message.trim()) {
      // If message isn't just white space
      const newMessage: Message = { author: "user", content: message }; // Update the type of newMessage
      setMessageList([...messageList, newMessage]); // Add the new message to the messageList
      setMessage(""); // Clear the input after sending the message

      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    }
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
            <Pressable
              onPress={() => setStartConversation(true)}
              style={styles.startButton}
            >
              <Text>Start Conversation</Text>
            </Pressable>
            <ScrollView
              ref={scrollViewRef}
              style={styles.messageArea}
              onContentSizeChange={scrollToBottom}
              // Here we set a maxHeight for your ScrollView
              contentContainerStyle={{ maxHeight: 400 }}
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
              onSubmitEditing={sendMessage} // modified to call sendMessage when you submit the input
            />
            <Pressable
              style={styles.sendButton}
              onPress={sendMessage} // Use the button to send message
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
    top: 202,
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
    top: 0,
    left: 114,
    color: Color.colorWhite,
    zIndex: 1,
  },
  rectangleParent: {
    top: 378,
    left: 15,
    backgroundColor: Color.colorAliceblue_100,

    width: "100%",
    height: 250,
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
    top: 1,
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
      { translateY: -70 }, // Move 10 pixels down
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
  },
  messageArea: {
    flex: 1,
    padding: 10,
    height: 400,
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
  },
  startButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
});

export default DashboardOffline;
