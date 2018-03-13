import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  heading: {
    fontSize: 24,
    paddingBottom: 10,
    color: '#fff',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Gym Tracker v0.0.1</Text>
      <Text style={styles.text}>Testing changes to gym app.</Text>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text}>Changes you make will automatically reload.</Text>
      <Text style={styles.text}>Shake your phone to open the developer menu.</Text>
    </View>
  );
}
