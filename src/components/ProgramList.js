import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, StyleSheet, View } from 'react-native';
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

export const CreateList = ({ onSelectProgram, allPrograms }) => (
  <FlatList
    style={styles.list}
    data={allPrograms}
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

CreateList.propTypes = {
  onSelectProgram: PropTypes.func.isRequired,
  allPrograms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  })).isRequired,
};

const ProgramList = ({ onSelectProgram, programs, isLoadingSelectedProgram }) => {
  if (isLoadingSelectedProgram) {
    return <View><Text>Loading selected Training Program...</Text></View>;
  }
  if (programs.loading) {
    return (
      <Text style={styles.loading}>Getting Training Programs ...</Text>
    );
  }
  const createListProps = {
    onSelectProgram,
    allPrograms: programs.allPrograms,
  };
  return <CreateList {...createListProps} />;
};

ProgramList.propTypes = {
  isLoadingSelectedProgram: PropTypes.bool.isRequired,
  programs: PropTypes.PropTypes.shape({}).isRequired,
  onSelectProgram: PropTypes.func.isRequired,
};

export default ProgramList;
