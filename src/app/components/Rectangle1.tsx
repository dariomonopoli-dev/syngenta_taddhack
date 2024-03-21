import * as React from "react";
import { StyleSheet, View } from "react-native";

const Rectangle1 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#73d678",
    width: 174,
    height: 52,
  },
});

export default Rectangle1;
