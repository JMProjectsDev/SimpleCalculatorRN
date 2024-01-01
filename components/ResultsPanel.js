import { Text, View, Image, StyleSheet } from "react-native";

export default function ResultsPanel() {
  return (
    <View style={styles.resultsView}>
      <Image
        source={require("../assets/resultsVisualizer.png")}
        style={styles.resultsVisualizer}
      />
      <Text style={styles.digits}>5x2</Text>
      <Text style={styles.result}>10</Text>
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
  },
  resultsVisualizer: {
    width: "100%",
    height: "100%",
    borderColor: "black",
    objectFit: "contain",
  },

  digits: {
    fontSize: 48,
    fontWeight: "700",
  },

  result: {
    fontSize: 48,
    fontWeight: "700",
    color: "#353535",
  },
});
