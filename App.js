import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ResultsPanel from "./components/ResultsPanel";
import ButtonsPanel from "./components/ButtonsPanel";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState();
  const [result, setResult] = useState();

  const handleButtonPress = (buttonType) => {
    // Actualizar estado asincrónicamente
    setTimeout(() => {
      switch (buttonType) {
        case "del_all":
          setInput("");
          setResult("");
          break;
        case "%":
          setInput((prevInput) => prevInput + buttonType);
          break;
        case "del":
          setInput((prevInput) => prevInput.slice(0, -1));
          break;
        case "/":
          setInput((prevInput) => prevInput + "÷");
          break;
        case "*":
          setInput((prevInput) => prevInput + "x");
          break;
        case "-":
          setInput((prevInput) => prevInput + buttonType);
          break;
        case "+":
          setInput((prevInput) => prevInput + buttonType);
          break;
        case "00":
          setInput((prevInput) => prevInput + "00");
          break;
        case "=":
          try {
            // Reemplaza los símbolos visuales con los operadores matemáticos
            let expression = input.replace(/x/g, "*").replace(/÷/g, "/");
            const evalResult = eval(expression);
            setResult(evalResult.toString());
          } catch (e) {
            setResult("Error");
          }
          break;
        default:
          setInput((prevInput) => prevInput + buttonType);
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
