import { StatusBar } from "expo-status-bar";
import { LayoutAnimation, StyleSheet, View } from "react-native";
import ResultsPanel from "./components/ResultsPanel";
import ButtonsPanel from "./components/ButtonsPanel";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState();

  // Nuevo estado para alternar las vistas
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const handleButtonPress = (buttonType) => {
    setTimeout(() => {
      let lastChar = input.slice(-1);
      let isLastCharOperator = [
        "/",
        "*",
        "+",
        "-",
        "÷",
        "x",
        "%",
        ",",
      ].includes(lastChar);
      let isButtonSymbol = ["+", "-", "*", "/", "%"].includes(buttonType);

      switch (buttonType) {
        case "del_all":
          setInput("");
          setResult("");
          break;
        case "%":
          setInput((prevInput) => prevInput + "%");
          break;
        case "del":
          setInput((prevInput) => prevInput.slice(0, -1));
          break;
        case "/":
          if (input !== "" && !isLastCharOperator)
            setInput((prevInput) => prevInput + "÷");
          break;
        case "*":
          if (input !== "" && !isLastCharOperator)
            setInput((prevInput) => prevInput + "x");
          break;
        case "-":
          // Permite '-' si es el primer carácter o el último carácter es un operador
          if (input === "" || lastChar !== "-") {
            setInput((prevInput) => prevInput + buttonType);
          }
          break;
        case "+":
          if (input !== "" && !isLastCharOperator) {
            setInput((prevInput) => prevInput + buttonType);
          }
          break;
        case ".":
          input === ""
            ? setInput((prevInput) => prevInput + "0,")
            : input !== "" && !isLastCharOperator
            ? setInput((prevInput) => prevInput + ",")
            : input !== "" && isLastCharOperator
            ? setInput((prevInput) => prevInput)
            : {};
          break;
        case "=":
          try {
            let expression = input
              .replace(/x/g, "*")
              .replace(/÷/g, "/")
              .replace(/,/g, ".")
              .replace(/%/g, "/100*");

            if (input !== "") {
              const evalResult = evaluate(expression);
              setResult(evalResult.toString().replace(/\./g, ","));
            }
          } catch (e) {
            setResult("Error");
          }
          break;
        case "advOpt":
          try {
            handleAdvancedOptionsToggle();
            //console.log("dentro del try")
          } catch (error) {
            console.log("Error");
          }
          break;
        default:
          if (!isButtonSymbol || !isLastCharOperator) {
            setInput((prevInput) => prevInput + buttonType);
          }
          break;
      }
    }, 0);
  };

  // Manejador para el botón de opciones avanzadas
  const handleAdvancedOptionsToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowAdvancedOptions(!showAdvancedOptions);
    console.log("dentro de la funcion")
  };

  return (
    <View style={styles.container}>
      <ResultsPanel input={input} result={result} />
      <ButtonsPanel
        onButtonPress={handleButtonPress}
        showAdvancedOptions={showAdvancedOptions}
        onAdvancedOptionsToggle={() =>
          setShowAdvancedOptions(!showAdvancedOptions)
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
  },
});
