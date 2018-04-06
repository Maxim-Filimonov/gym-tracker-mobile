import { connect } from 'react-redux';
import ExercisesHeading from '../components/ExercisesHeading';
import * as utils from '../utils';

export const mapStateToProps = state => ({
  programName: state.program.name,
  weekNumber: utils.currentWeekNumber(state.program.startDate),
  dayNumber: utils.currentDayNumber(state.program.startDate),
});

export default connect(mapStateToProps)(ExercisesHeading);
