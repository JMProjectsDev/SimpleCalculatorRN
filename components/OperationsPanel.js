import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Animated,
} from "react-native";

export default function OperationsPanel() {
  const [pressedButtonId, setPressedButtonId] = useState(null);
  const operationButtons = [
    {
      id: "cButton",
      image: require("../assets/CButton.png"),
      animValue: new Animated.Value(1),
    },
    {
      id: "percButton",
      image: require("../assets/PercentageButton.png"),
      animValue: new Animated.Value(1),
    },
    {
      id: "suprButton",
      image: require("../assets/SuprButton.png"),
      animValue: new Animated.Value(1),
    },
    {
      id: "divButton",
      image: require("../assets/DivButton.png"),
      animValue: new Animated.Value(1),
    },
    {
      id: "multButton",
      image: require("../assets/MultButton.png"),
      animValue: new Animated.Value(1),
    },
    {
      id: "minusButton",
      image: require("../assets/MinusButton.png"),
      animValue: new Animated.Value(1),
    },
    {
      id: "plusButton",
      image: require("../assets/PlusButton.png"),
      animValue: new Animated.Value(1),
    },
    {
      id: "equalButton",
      image: require("../assets/EqualButton.png"),
      animValue: new Animated.Value(1),
    },
  ];

  const renderButtons = () =>
    operationButtons.map((button) => {
      const backgroundColor = button.animValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgba(161, 161, 161, 0.5)", "#F2F2F2"],
      });

      const onPressIn = () => {
        Animated.timing(button.animValue, {
          toValue: 0.3,
          duration: 30,
          useNativeDriver: false,
        }).start();
      };

      const onPressOut = () => {
        Animated.timing(button.animValue, {
          toValue: 1,
          duration: 150,
          useNativeDriver: false,
        }).start();
      };

      return (
        <View key={button.id} style={styles.buttonShadow}>
          <TouchableWithoutFeedback
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <Animated.View style={[styles.button, { backgroundColor }]}>
              <Image source={button.image} style={styles.buttonImage} />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      );
    });

  return <View style={styles.buttonsView}>{renderButtons()}</View>;
}
const styles = StyleSheet.create({
  buttonsView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonShadow: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,    
    marginBottom: 10, 
    backgroundColor: "#FFFFFF", 
    elevation: 5, // Solo para Android
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden", // Asegura que la imagen no se salga de los bordes circulares
  },
  buttonImage: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 48,
    color: "#000",
  },
});
