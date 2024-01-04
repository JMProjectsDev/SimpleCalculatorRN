import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Animated,
} from "react-native";

export default function ButtonsPanel({
  onButtonPress,
  showAdvancedOptions,
  onAdvancedOptionsToggle,
}) {
  const operationButtons = [
    {
      id: "cButton",
      image: require("../assets/cButton.png"),
      button: "del_all",
      advanced: false,
    },
    {
      id: "percButton",
      image: require("../assets/percentageButton.png"),
      button: "%",
      advanced: false,
    },
    {
      id: "suprButton",
      image: require("../assets/suprButton.png"),
      button: "del",
      advanced: false,
    },
    {
      id: "divButton",
      image: require("../assets/divButton.png"),
      button: "/",
      advanced: false,
    },
    {
      id: "_7Button",
      image: require("../assets/_7Button.png"),
      button: 7,
      advanced: false,
    },
    {
      id: "_8Button",
      image: require("../assets/_8Button.png"),
      button: 8,
      advanced: false,
    },
    {
      id: "_9Button",
      image: require("../assets/_9Button.png"),
      button: 9,
      advanced: false,
    },
    {
      id: "multButton",
      image: require("../assets/multButton.png"),
      button: "*",
      advanced: false,
    },
    {
      id: "_4Button",
      image: require("../assets/_4Button.png"),
      button: 4,
      advanced: false,
    },
    {
      id: "_5Button",
      image: require("../assets/_5Button.png"),
      button: 5,
      advanced: false,
    },
    {
      id: "_6Button",
      image: require("../assets/_6Button.png"),
      button: 6,
      advanced: false,
    },
    {
      id: "minusButton",
      image: require("../assets/minusButton.png"),
      button: "-",
      advanced: false,
    },
    {
      id: "_1Button",
      image: require("../assets/_1Button.png"),
      button: 1,
      advanced: false,
    },
    {
      id: "_2Button",
      image: require("../assets/_2Button.png"),
      button: 2,
      advanced: false,
    },
    {
      id: "_3Button",
      image: require("../assets/_3Button.png"),
      button: 3,
      advanced: false,
    },
    {
      id: "plusButton",
      image: require("../assets/plusButton.png"),
      button: "+",
      advanced: false,
    },
    {
      id: "advOptButton",
      image: require("../assets/advOptButton.png"),
      button: "advOpt",
      advanced: false,
    },
    {
      id: "_0Button",
      image: require("../assets/_0Button.png"),
      button: 0,
      advanced: false,
    },
    {
      id: "dotButton",
      image: require("../assets/dotButton.png"),
      button: ".",
      advanced: false,
    },
    {
      id: "equalButton",
      image: require("../assets/equalButton.png"),
      button: "=",
      advanced: false,
    },
  ];

  // Crea una referencia para cada boton. Luego habra que acceder al indice de cada boton*
  const animRefs = useRef(
    operationButtons.map(() => ({
      scaleAnim: new Animated.Value(1),
      animValue: new Animated.Value(1),
    }))
  ).current; //accede al valor actual. Sin esto no sabe cual es => undefined error

  const renderButtons = () => {
    return operationButtons.map((button, index) => {
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

      const baseAnimatedStyle = {
        opacity: animRefs[index].animValue,
        transform: [{ scale: animRefs[index].scaleAnim }],
      };

      // Aplica estilos adicionales en función de si estamos mostrando las opciones avanzadas
      const buttonStyle = button.advanced
        ? showAdvancedOptions
          ? { ...baseAnimatedStyle, ...styles.advancedButton }
          : { ...baseAnimatedStyle, ...styles.hiddenButton }
        : showAdvancedOptions
        ? { ...baseAnimatedStyle, ...styles.shrinkButton }
        : baseAnimatedStyle;

      return (
        <TouchableWithoutFeedback
          key={button.id}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <Animated.View style={[styles.buttonShadow, buttonStyle]}>
            <Image source={button.image} style={styles.buttonImage} />
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    });
  };

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
    marginVertical: 6,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonImage: {
    width: "100%",
    height: "100%",
  },

  // Estilos adicionales para botones avanzados y su visibilidad
  advancedButton: {
    // Estilos cuando las opciones avanzadas están activas
    width: 50, // Un ejemplo, ajusta según tus necesidades
    height: 50, // Un ejemplo, ajusta según tus necesidades
    // ... Otros estilos que quieras aplicar a los botones avanzados
  },
  hiddenButton: {
    // Estilos para ocultar botones avanzados cuando no están activos
    width: 0,
    height: 0,
    opacity: 0,
    transform: [{ scale: 0 }],
  },
});
