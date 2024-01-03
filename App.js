import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ResultsPanel from "./components/ResultsPanel";
import ButtonsPanel from "./components/ButtonsPanel";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState();

  const handleButtonPress = (buttonType) => {
    setTimeout(() => {
      let lastChar = input.slice(-1);
      let isLastCharOperator = ["/", "*", "+", "-", "÷", "x", "%"].includes(
        lastChar
      );
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
          // Evita repetir ',' si el último carácter ya es ','
          if (lastChar !== ",") setInput((prevInput) => prevInput + ",");
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
        default:
          if (!isButtonSymbol || !isLastCharOperator) {
            setInput((prevInput) => prevInput + buttonType);
          }
          break;
      }
    }, 0);
  };

  return (
    <View style={styles.container}>
      <ResultsPanel input={input} result={result} />
      <ButtonsPanel onButtonPress={handleButtonPress} />
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
