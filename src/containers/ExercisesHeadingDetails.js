import { connect } from 'react-redux';
import moment from 'moment';
import ExercisesHeading from '../components/ExercisesHeading';

export const calculateWeekNumber = (startDate) => {
  const mDiff = moment(startDate).diff(moment(), 'days') + 1;
  const mSub = mDiff - 7;
  const weekNumber = mSub < 0 ? 1 : Math.ceil(mSub / 7) + 1;
  return weekNumber;
};

export const calculateDayNumber = (startDate) => {
  console.log('startDate:', startDate);
  return 1;
};

export const mapStateToProps = state => ({
  programName: state.program.name,
  weekNumber: calculateWeekNumber(state.program.startDate),
  dayNumber: calculateDayNumber(state.program.startDate),
});

export default connect(mapStateToProps)(ExercisesHeading);
