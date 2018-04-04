import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const ProgramNameAndSummary = ({ data, misc }) => {
  console.log('ProgramNameAndSummary data:', data);
  if (data.loading) {
    return <View><Text>Loading ...</Text></View>;
  }
  return (
    <View>
      <Text>Program name: {data.findProgram.name}</Text>
      <Text>Program summary: {data.findProgram.summary}</Text>
      <Text>Misc: {misc}</Text>
    </View>
  );
};

/* ProgramNameAndSummary.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}; */

export default ProgramNameAndSummary;
