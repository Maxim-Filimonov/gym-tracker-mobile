import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './components/LandingPage';

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
    <LandingPage />
  );
}
