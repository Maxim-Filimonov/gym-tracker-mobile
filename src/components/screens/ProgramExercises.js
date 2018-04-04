import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import ProgramNameSummary from '../../containers/ProgramNameSummary';

const ProgramExercises = ({ match: { params } }) => {
  console.log('ProgramExercises params: ', params);
  const { programId } = params;
  return (
    <View>
      <ProgramNameSummary programId={programId} misc="from me!!" />
    </View>
  );
};

ProgramExercises.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default ProgramExercises;

