import { Button, Text, TouchableHighlight, View } from "react-native";
import { StyleSheet } from "react-native";
import { BlurView } from '@react-native-community/blur';


export default function OperationsPanel() {
  return (
    <View style={styles.buttonsView}>
      <TouchableHighlight style={styles.buttonTools}>
        <BlurView
          style={styles.blurView}
          blurType="light" 
          blurAmount={10} 
        >
          <Text style={styles.text}>C</Text>
        </BlurView>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  blurView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35, // Asegúrate de que coincida con el borderRadius del botón
    overflow: 'hidden', // Importante para mantener el borderRadius
  },
  buttonTools: {
    height: 70,
    width: 70,
    borderRadius: 35,
    textAlign: "center",
    backgroundColor: 'rgba(176, 176, 176, 0.2)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text: {
    textAlign: "center",
    fontSize: 48,
  },
});
