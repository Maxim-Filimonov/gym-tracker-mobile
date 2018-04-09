import React from 'react';
import { View } from 'react-native';
import Screen from '../Screen';
import ExercisesHeading from '../../containers/ExercisesHeadingDetails';
import ExerciseList from '../../containers/ExerciseListDetails';

const ProgramExercises = () => (
  <Screen showFooter={false}>
    <View>
      <ExercisesHeading />
      <ExerciseList />
    </View>
  </Screen>
);

// Menu
// -> change program
// -> logout

export default ProgramExercises;

