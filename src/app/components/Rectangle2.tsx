import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../../GlobalStyles";

const Rectangle2 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: Color.colorLightcyan,
    width: 174,
    height: 52,
  },
});

export default Rectangle2;
