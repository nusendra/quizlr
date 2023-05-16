import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
  return (
    <>
      <LinearGradient
        colors={['#01212C', '#003C53']}
        style={{
    flex: 1,
        }}
      />
      <StatusBar style="light"  />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
