import { Text, View, Image, StyleSheet } from "react-native";

export default function ResultsPanel() {
  return (
    <View style={styles.resultsView}>
      <Image
        source={require("../assets/resultsVisualizer.png")}
        style={styles.resultsVisualizer}
      />
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
});
