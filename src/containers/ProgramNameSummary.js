import { graphql, withApollo } from 'react-apollo';
import { compose } from 'recompose';
import gql from 'graphql-tag';
import ProgramNameAndSummary from '../components/Exercises/ProgramNameAndSummary';

const GET_PROGRAM_NAME_AND_SUMMARY = gql`
  query ProgramDetails ($programId: String!) {
    findProgram (id: $programId) {
        name
        summary
      }
  }`;

export default compose(
  graphql(
    GET_PROGRAM_NAME_AND_SUMMARY,
    {
      options: props => ({
        variables: {
          programId: props.programId,
        },
      }),
    },
  ),
  withApollo,
)(ProgramNameAndSummary);
