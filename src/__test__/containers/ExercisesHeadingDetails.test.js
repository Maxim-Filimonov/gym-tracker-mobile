import { calculateWeekNumber, calculateDayNumber, mapStateToProps } from '../../containers/ExercisesHeadingDetails';

describe('<ExercisesHeadingDetails />', () => {
  describe('mapStateToProps', () => {
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
  describe('# calculateWeekNumber', () => {
    it('Should calculate the correct week as week number 1', () => {
      const startDateToday = '2018-04-05';
      const result = calculateWeekNumber(startDateToday);
      expect(result).toEqual(1);
    });
    it('Should calculate the correct week as week number 1', () => {
      const startDateToday = '2018-04-10';
      const result = calculateWeekNumber(startDateToday);
      expect(result).toEqual(1);
    });
    it('Should calculate the correct week as week number 2', () => {
      const startDateToday = '2018-04-13';
      const result = calculateWeekNumber(startDateToday);
      expect(result).toEqual(2);
    });
    it('Should calculate the correct week as week number 2', () => {
      const startDateToday = '2018-04-17';
      const result = calculateWeekNumber(startDateToday);
      expect(result).toEqual(2);
    });
    it('Should calculate the correct week as week number 3', () => {
      const startDateToday = '2018-04-20';
      const result = calculateWeekNumber(startDateToday);
      expect(result).toEqual(3);
    });
    it('Should calculate the correct week as week number 3', () => {
      const startDateToday = '2018-04-25';
      const result = calculateWeekNumber(startDateToday);
      expect(result).toEqual(3);
    });
    it('Should calculate the correct week as week number 4', () => {
      const startDateToday = '2018-04-27';
      const result = calculateWeekNumber(startDateToday);
      expect(result).toEqual(4);
    });
    it('Should calculate the correct week as week number 4', () => {
      const startDateToday = '2018-05-03';
      const result = calculateWeekNumber(startDateToday);
      expect(result).toEqual(4);
    });
  });
  describe('# calculateDayNumber', () => {
    it('Should calculate the correct day number as number 1', () => {
      const startDateToday = '2018-04-05';
      const result = calculateDayNumber(startDateToday);
      expect(result).toEqual(1);
    });
    /*     it('Should calculate the correct day number as number 1', () => {
      const startDateToday = '2018-04-10';
      const result = calculateDayNumber(startDateToday);
      expect(result).toEqual(6);
    });
    it('Should calculate the correct day number as number 2', () => {
      const startDateToday = '2018-04-13';
      const result = calculateDayNumber(startDateToday);
      expect(result).toEqual(1);
    });
    it('Should calculate the correct day number as number 2', () => {
      const startDateToday = '2018-04-17';
      const result = calculateDayNumber(startDateToday);
      expect(result).toEqual(5);
    });
    it('Should calculate the correct day number as number 3', () => {
      const startDateToday = '2018-04-20';
      const result = calculateDayNumber(startDateToday);
      expect(result).toEqual(1);
    });
    it('Should calculate the correct day number as number 3', () => {
      const startDateToday = '2018-04-25';
      const result = calculateDayNumber(startDateToday);
      expect(result).toEqual(6);
    });
    it('Should calculate the correct day number as number 4', () => {
      const startDateToday = '2018-04-27';
      const result = calculateDayNumber(startDateToday);
      expect(result).toEqual(1);
    });
    it('Should calculate the correct day number as number 4', () => {
      const startDateToday = '2018-05-03';
      const result = calculateDayNumber(startDateToday);
      expect(result).toEqual(7);
    }); */
  });
});
