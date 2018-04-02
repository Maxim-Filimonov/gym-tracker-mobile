import React from 'react';
import { View } from 'react-native';
import AppIntro from '../AppIntro';
import LoginSection from '../../containers/LoginSection';

const Landing = () => <View style={{ flex: 1 }}><AppIntro /><LoginSection /></View>;

export default Landing;
