import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Grafik1 = () => {
  return (
    <ImageBackground
      style={styles.grafik2Icon}
      resizeMode="cover"
      source={require("../assets/grafik2.png")}
    />
  );
};

const styles = StyleSheet.create({
  grafik2Icon: {
    width: 321,
    height: 328,
    transform: [
      {
        rotate: "-0.37deg",
      },
    ],
  },
});

export default Grafik1;
