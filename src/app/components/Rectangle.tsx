import * as React from "react";
import { StyleSheet, View } from "react-native";

const Rectangle = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#021027",
    width: 174,
    height: 52,
  },
});

export default Rectangle;
