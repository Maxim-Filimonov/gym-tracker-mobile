import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import ExerciseList from '../components/ExerciseList';
import * as utils from '../utils';

const GET_EXERCISES =
  gql`query findByDay ($programId: String!, $dayNumber: Int!) {
    findByDay (id: $programId, dayNumber: $dayNumber) {
      id
      dayType
      dayNumber
      exercises {
        id
        reps
        sets
        type
        comments
      }
    }
  }`;

// @TODO: Remove the || '1742e8f9-2fb7-4dba-9787-4b84dc680d84'
export const mapStateToProps = state => ({
  dayNumber: utils.calculateDayNumber(state.program.startDate),
  programId: state.program.id,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  // leaving this here as palceholder for later
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  graphql(
    GET_EXERCISES,
    {
      options: props => ({
        variables: {
          programId: props.programId,
          dayNumber: props.dayNumber,
        },
      }),
    },
  ),
  withApollo,
)(ExerciseList);
