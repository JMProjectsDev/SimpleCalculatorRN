import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import CButton from "../buttons/CButton";

export default function OperationsPanel() {
  const [opacity, setOpacity] = useState(1);
  const cButton = require("../assets/CButton.png");
  return (
    <View style={styles.buttonsView}>
      {/* <TouchableHighlight style={styles.buttonTools}>
        <BlurView style={styles.blurView} intensity={50} tint="light">
          <LinearGradient
            colors={["rgba(255, 255, 255, 0.5)", "transparent"]}
            style={styles.innerShadow}
          >
            <Text style={styles.text}>C</Text>
          </LinearGradient>
        </BlurView>
      </TouchableHighlight>*/}
      <TouchableOpacity
        activeOpacity={0.5} // Cambia esto según el efecto deseado
        onPressIn={() => setOpacity(0.5)}
        onPressOut={() => setOpacity(1)}
      >
        <Image
          source={cButton}
          style={{ opacity, width: 78, height: 78 }} // Ajusta el tamaño según sea necesario
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  innerShadow: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  blurView: {
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: "center",
  },
  buttonTools: {
    height: 70,
    width: 70,
    borderRadius: 35,
    textAlign: "center",
    backgroundColor: "rgba(176, 176, 176, 0.21)",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    overflow: "hidden",
  },
  text: {
    fontSize: 48,
    color: "#000",
  },
});
