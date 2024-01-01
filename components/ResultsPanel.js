import { Text, View, Image, StyleSheet } from "react-native";

export default function ResultsPanel({ input, result }) {
  return (
    <View style={styles.resultsView}>
      <Image
        source={require("../assets/resultsVisualizer.png")}
        style={styles.resultsVisualizer}
      />
      <View style={styles.operations}>
        <Text style={styles.digits}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultsView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "30%",
    position: "relative",
  },
  resultsVisualizer: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  operations: {
    position: "absolute",
    alignItems: "flex-end",
    bottom: 30,
    right: 20,
    zIndex: 10,
  },
  digits: {
    fontSize: 48,
    fontWeight: "700",
    color: "#000",
  },
  result: {
    fontSize: 48,
    fontWeight: "500",
    color: "#454545",
  },
});
