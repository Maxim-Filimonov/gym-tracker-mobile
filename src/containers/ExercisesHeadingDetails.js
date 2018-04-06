import { connect } from 'react-redux';
import ExercisesHeading from '../components/ExercisesHeading';
import * as utils from '../utils';

export const mapStateToProps = state => ({
  programName: state.program.name,
  weekNumber: utils.calculateWeekNumber(state.program.startDate),
  dayNumber: utils.calculateDayNumber(state.program.startDate),
});

export default connect(mapStateToProps)(ExercisesHeading);
