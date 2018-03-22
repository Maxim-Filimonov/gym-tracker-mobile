import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../Header';
import Intro from './Intro';
import LoginSection from './LoginSection';
import AppFooter from '../AppFooter';
import { APP_NAME, APP_AUTHOR, APP_SLOGAN } from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  svContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const LandingPage = () => (
  <View style={styles.container}>
    <Header title={APP_NAME} slogan={APP_SLOGAN} />
    <ScrollView contentContainerStyle={styles.svContainer}>
      <Intro />
      <LoginSection />
    </ScrollView>
    <AppFooter appName={APP_NAME} appAuthor={APP_AUTHOR} />
  </View>
);
export default LandingPage;
