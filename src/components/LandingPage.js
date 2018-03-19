import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Intro from './Intro';
import LoginSection from './LoginSection';
import AppFooter from './AppFooter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const LandingPage = () => (
  <View style={styles.container}>
    <Header title="GymBuddy" slogan="strength & exercise tracking" />
    <Intro />
    <LoginSection />
    <AppFooter appName="GymBuddy" appAuthor="Alex Bandisch" />
  </View>
);

export default LandingPage;
