import React from 'react';
import { View } from 'react-native';
import Screen from '../Screen';
import AppIntro from '../AppIntro';
import LoginSection from '../../containers/LoginSection';

const Landing = () =>
  <Screen><View style={{ flex: 1 }}><AppIntro /><LoginSection /></View></Screen>;

export default Landing;
