import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Animated,
} from "react-native";

export default function ButtonsPanel({ onButtonPress }) {
  const operationButtons = [
    {
      id: "cButton",
      image: require("../assets/cButton.png"),
      button: "del_all",
    },
    {
      id: "percButton",
      image: require("../assets/percentageButton.png"),

      button: "%",
    },
    {
      id: "suprButton",
      image: require("../assets/suprButton.png"),

      button: "del",
    },
    {
      id: "divButton",
      image: require("../assets/divButton.png"),

      button: "/",
    },
    {
      id: "_7Button",
      image: require("../assets/_7Button.png"),

      button: 7,
    },
    {
      id: "_8Button",
      image: require("../assets/_8Button.png"),

      button: 8,
    },
    {
      id: "_9Button",
      image: require("../assets/_9Button.png"),

      button: 9,
    },
    {
      id: "multButton",
      image: require("../assets/multButton.png"),

      button: "*",
    },
    {
      id: "_4Button",
      image: require("../assets/_4Button.png"),

      button: 4,
    },
    {
      id: "_5Button",
      image: require("../assets/_5Button.png"),

      button: 5,
    },
    {
      id: "_6Button",
      image: require("../assets/_6Button.png"),

      button: 6,
    },
    {
      id: "minusButton",
      image: require("../assets/minusButton.png"),

      button: "-",
    },
    {
      id: "_1Button",
      image: require("../assets/_1Button.png"),

      button: 1,
    },
    {
      id: "_2Button",
      image: require("../assets/_2Button.png"),

      button: 2,
    },
    {
      id: "_3Button",
      image: require("../assets/_3Button.png"),

      button: 3,
    },
    {
      id: "plusButton",
      image: require("../assets/plusButton.png"),

      button: "+",
    },
    {
      id: "_00Button",
      image: require("../assets/_00Button.png"),

      button: "00",
    },
    {
      id: "_0Button",
      image: require("../assets/_0Button.png"),

      button: 0,
    },
    {
      id: "DotButton",
      image: require("../assets/dotButton.png"),

      button: ",",
    },
    {
      id: "equalButton",
      image: require("../assets/equalButton.png"),

      button: "=",
    },
  ];

  // Crea una referencia para cada botón
  const animRefs = useRef(
    operationButtons.map(() => ({
      scaleAnim: new Animated.Value(1),
      animValue: new Animated.Value(1),
    }))
  ).current;

  const renderButtons = () =>
    operationButtons.map((button, index) => {
      const onPressIn = () => {
        // Inicia las animaciones
        Animated.parallel([
          Animated.spring(animRefs[index].scaleAnim, {
            toValue: 0.8,
            useNativeDriver: true,
          }),
          Animated.timing(animRefs[index].animValue, {
            toValue: 0.2,
            duration: 50,
            useNativeDriver: true,
          }),
        ]).start();

        // Llama a la función de manejo de botones
        onButtonPress(button.button);
      };

      const onPressOut = () => {
        // Finaliza las animaciones
        Animated.parallel([
          Animated.spring(animRefs[index].scaleAnim, {
            toValue: 1,
            friction: 3,
            useNativeDriver: true,
          }),
          Animated.timing(animRefs[index].animValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start();
      };

      return (
        <TouchableWithoutFeedback
          key={button.id}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <Animated.View
            style={[
              styles.buttonShadow,
              {
                opacity: animRefs[index].animValue,
                transform: [{ scale: animRefs[index].scaleAnim }],
              },
            ]}
          >
            <Image source={button.image} style={styles.buttonImage} />
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    });

  return <View style={styles.buttonsView}>{renderButtons()}</View>;
}
const styles = StyleSheet.create({
  buttonsView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonShadow: {
    width: 75,
    height: 75,
    marginVertical: 8,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonImage: {
    width: "100%",
    height: "100%",
  },
});
