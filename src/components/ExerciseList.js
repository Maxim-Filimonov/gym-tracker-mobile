import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text } from 'react-native';
import ExerciseBox from './ExerciseBox';

const ExerciseList = ({ data }) => {
  if (data.loading) {
    return <View><Text>Loading exercises ...</Text></View>;
  }
  const { exercises } = data.findByDay;
  return <ExercisesListView exercises={exercises} />;
};

export const SingleExerciseView = (ex) => {
  const props = {
    name: ex.type,
    targets: {
      sets: ex.sets,
      reps: ex.reps,
    },
    ptNote: ex.comments,
  };
  return <ExerciseBox key={ex.id} {...props} />;
};

export const ExercisesListView = ({ exercises }) => (
  <ScrollView>
    {exercises.map(SingleExerciseView)}
  </ScrollView>);

ExercisesListView.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    reps: PropTypes.number.isRequired,
    sets: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
  })).isRequired,
};

ExerciseList.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ExerciseList;
