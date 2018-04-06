import { mapStateToProps } from '../../containers/ExercisesHeadingDetails';

describe('<ExercisesHeadingDetails />', () => {
  describe('mapStateToProps', () => {
    it('should return the correct state', () => {
      const initialState = {
        program: {
          name: 'Test Name',
          startDate: '2018-04-05',
        },
      };
      const expectedState = {
        programName: 'Test Name',
        weekNumber: 1,
        dayNumber: 1,
      };
      const result = mapStateToProps(initialState);
      expect(result).toEqual(expectedState);
    });
  });
});
