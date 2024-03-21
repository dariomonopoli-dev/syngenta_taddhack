import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Grafik = () => {
  return (
    <ImageBackground
      style={styles.grafik1Icon}
      resizeMode="cover"
      source={require("../assets/grafik1.png")}
    />
  );
};

const styles = StyleSheet.create({
  grafik1Icon: {
    width: 340,
    height: 322,
  },
});

export default Grafik;
