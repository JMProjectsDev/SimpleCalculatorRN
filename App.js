import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ResultsPanel from "./components/ResultsPanel";
import ButtonsPanel from "./components/ButtonsPanel";

export default function App() {
  return (
    <View style={styles.container}>
      <ResultsPanel />
      <ButtonsPanel />
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
