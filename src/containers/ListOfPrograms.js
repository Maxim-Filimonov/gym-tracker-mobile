import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import ProgramList from '../components/ProgramList';
import { selectProgram } from '../../src/actions';

const ALL_PROGRAMS_QUERY = gql`
  {allPrograms {
    id
    name
    summary
  }}`;

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelectProgram: (programId, programName) => {
    Promise.resolve(dispatch(selectProgram(programId, programName)))
      .then(() => ownProps.history.push(`/exercises/${programId}`));
  },
});

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
  graphql(ALL_PROGRAMS_QUERY, { name: 'programs' }),
  withApollo,
)(ProgramList);
