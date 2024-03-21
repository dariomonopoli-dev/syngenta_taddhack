import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Dashboard from "./screens/DashBoard";
import DashboardOffline from "./screens/DashBoardOffline";
import Frame from "./screens/Frame";
import Frame1 from "./screens/Frame1";
import NetInfo from "@react-native-community/netinfo";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isConnected, setIsConnected] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Imprima-Regular": require("./assets/fonts/Imprima-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"DashboardOffline"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DashboardOffline"
            component={DashboardOffline}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Frame"
            component={Frame}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Frame1"
            component={Frame1}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
