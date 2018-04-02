import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import ProgramListItem from '../components/ProgramListItem';

const ALL_PROGRAMS_QUERY = gql`
  {allPrograms {
    id
    name
    summary
  }}`;

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

const ProgramList = ({ history, programs }) => {
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
              onSelectProgram={() => history.push(`/exercises/${item.id}`)}
              {...item} // Contains id, name, summary
            />)
        }
      keyExtractor={item => item.id}
    />
  );
};

ProgramList.propTypes = {
  programs: PropTypes.PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default compose(
  withRouter,
  graphql(ALL_PROGRAMS_QUERY, { name: 'programs' }),
  withApollo,
)(ProgramList);
