import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, StyleSheet } from 'react-native';
import ProgramListItem from '../components/ProgramListItem';

const styles = StyleSheet.create({
  loading: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    minHeight: 200,
  },
  list: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const ProgramList = ({ onSelectProgram, programs }) => {
  if (programs.loading) {
    return (
      <Text style={styles.loading}>Getting Training Programs ...</Text>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={programs.allPrograms}
      renderItem={
          ({ item }) =>
            (<ProgramListItem
              onSelectProgram={() => onSelectProgram(item.id, item.name)}
              {...item} // Contains id, name, summary
            />)
        }
      keyExtractor={item => item.id}
    />
  );
};

ProgramList.propTypes = {
  programs: PropTypes.PropTypes.shape({}).isRequired,
  onSelectProgram: PropTypes.func.isRequired,
};

export default ProgramList;
