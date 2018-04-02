import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../Header';
import AppFooter from '../AppFooter';
import TrainingProgramList from '../../containers/TrainingProgramList';
import { APP_AUTHOR, APP_NAME, APP_SLOGAN } from '../../config';

const TrainingProgramPage = () => (
  <View style={{ flex: 1 }}>
    <Header title={APP_NAME} slogan={APP_SLOGAN} />
    <ScrollView>
      <TrainingProgramList />
      <AppFooter appName={APP_NAME} appAuthor={APP_AUTHOR} />
    </ScrollView>
  </View>
);

export default TrainingProgramPage;
