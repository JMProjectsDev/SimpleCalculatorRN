import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PanelResults from './components/ResultsPanel';
import Operations from './components/OperationsPanel';

export default function App() {
  return (
    <View style={styles.container}>
      <PanelResults />
      <Operations />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
