import * as utils from '../../utils';
import { mapStateToProps } from '../../containers/ExercisesHeadingDetails';

describe('<ExercisesHeadingDetails />', () => {
  describe('mapStateToProps', () => {
    it('should return the correct state', () => {
      const startDate = '2018-04-05';
      const expectedWeekNumber = utils.currentWeekNumber(startDate);
      const expectedDayNumber = utils.currentDayNumber(startDate);
      const initialState = {
        program: {
          name: 'Test Name',
          startDate,
        },
      };
      const expectedState = {
        programName: 'Test Name',
        weekNumber: expectedWeekNumber,
        dayNumber: expectedDayNumber,
      };
      const result = mapStateToProps(initialState);
      expect(result).toEqual(expectedState);
    });
  });
});
