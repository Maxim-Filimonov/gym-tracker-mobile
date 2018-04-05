import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../Screen';
import ExercisesHeading from '../../containers/ExercisesHeadingDetails';

export const ProgramExercises = () => (
  <Screen showFooter={false}>
    <View>
      <ExercisesHeading />
      <Text>List of exercises here (ListOfExercises)</Text>
    </View>
  </Screen>
);

export default ProgramExercises;

