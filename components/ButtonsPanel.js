import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Animated,
} from "react-native";

export default function ButtonsPanel() {
  const operationButtons = [
    {
      id: "cButton",
      image: require("../assets/cButton.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "percButton",
      image: require("../assets/percentageButton.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "suprButton",
      image: require("../assets/suprButton.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "divButton",
      image: require("../assets/divButton.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "_7Button",
      image: require("../assets/_7Button.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "_8Button",
      image: require("../assets/_8Button.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "_9Button",
      image: require("../assets/_9Button.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "multButton",
      image: require("../assets/multButton.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "_4Button",
      image: require("../assets/_4Button.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "_5Button",
      image: require("../assets/_5Button.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "_6Button",
      image: require("../assets/_6Button.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "minusButton",
      image: require("../assets/minusButton.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "_1Button",
      image: require("../assets/_1Button.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "_2Button",
      image: require("../assets/_2Button.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "_3Button",
      image: require("../assets/_3Button.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "plusButton",
      image: require("../assets/plusButton.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "_00Button",
      image: require("../assets/_00Button.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "_0Button",
      image: require("../assets/_0Button.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "DotButton",
      image: require("../assets/dotButton.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
    {
      id: "equalButton",
      image: require("../assets/equalButton.png"),
      animValue: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    },
  ];

  const renderButtons = () =>
    operationButtons.map((button) => {
      const onPressIn = () => {
        // Animacion de la escala
        Animated.spring(button.scaleAnim, {
          toValue: 0.8,
          useNativeDriver: true,
        }).start();

        // Animacion de la escala
        Animated.timing(button.animValue, {
          toValue: 0.2,
          duration: 20,
          useNativeDriver: true,
        }).start();
      };

      const onPressOut = () => {
        // Vuelve la escala y la opacidad a la normalidad
        Animated.spring(button.scaleAnim, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true,
        }).start();
        Animated.timing(button.animValue, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
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
                opacity: button.animValue,
                transform: [{ scale: button.scaleAnim }],
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
