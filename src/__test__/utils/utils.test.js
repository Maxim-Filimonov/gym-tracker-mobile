import moment from 'moment';
import { currentWeekNumber, currentDayNumber } from '../../utils';

const TODAY = moment('2018-04-06');

describe('# currentWeekNumber', () => {
  it('Should calculate the correct week as week number 1', () => {
    const startDate = '2018-04-05';
    const result = currentWeekNumber(startDate, TODAY);
    expect(result).toEqual(1);
  });
  it('Should calculate the correct week as week number 2', () => {
    const startDate = '2018-03-29';
    const result = currentWeekNumber(startDate, TODAY);
    expect(result).toEqual(2);
  });
  it('Should calculate the correct week as week number 3', () => {
    const startDate = '2018-03-21';
    const result = currentWeekNumber(startDate, TODAY);
    expect(result).toEqual(3);
  });
  it('Should calculate the correct week as week number 4', () => {
    const startDate = '2018-03-15';
    const result = currentWeekNumber(startDate, TODAY);
    expect(result).toEqual(4);
  });
  it('Should calculate the correct week as week number 5', () => {
    const startDate = '2018-03-07';
    const result = currentWeekNumber(startDate, TODAY);
    expect(result).toEqual(5);
  });
  it('Should calculate the correct week as week number 6', () => {
    const startDate = '2018-03-01';
    const result = currentWeekNumber(startDate, TODAY);
    expect(result).toEqual(6);
  });
  it('Should calculate the correct week as week number 7', () => {
    const startDate = '2018-02-21';
    const result = currentWeekNumber(startDate, TODAY);
    expect(result).toEqual(7);
  });
  it('Should calculate the correct week as week number 8', () => {
    const startDate = '2018-02-13';
    const result = currentWeekNumber(startDate, TODAY);
    expect(result).toEqual(8);
  });
});
describe('# currentDayNumber', () => {
  it('Should calculate the correct day number as number 27', () => {
    const startDate = '2018-03-10';
    const result = currentDayNumber(startDate, TODAY);
    expect(result).toEqual(28);
  });
  it('Should calculate the correct day number as number 25', () => {
    const startDate = '2018-03-13';
    const result = currentDayNumber(startDate, TODAY);
    expect(result).toEqual(25);
  });
  it('Should calculate the correct day number as number 21', () => {
    const startDate = '2018-03-17';
    const result = currentDayNumber(startDate, TODAY);
    expect(result).toEqual(21);
  });
  it('Should calculate the correct day number as number 18', () => {
    const startDate = '2018-03-20';
    const result = currentDayNumber(startDate, TODAY);
    expect(result).toEqual(18);
  });
  it('Should calculate the correct day number as number 13', () => {
    const startDate = '2018-03-25';
    const result = currentDayNumber(startDate, TODAY);
    expect(result).toEqual(13);
  });
  it('Should calculate the correct day number as number 11', () => {
    const startDate = '2018-03-27';
    const result = currentDayNumber(startDate, TODAY);
    expect(result).toEqual(11);
  });
  it('Should calculate the correct day number as number 4', () => {
    const startDate = '2018-04-03';
    const result = currentDayNumber(startDate, TODAY);
    expect(result).toEqual(4);
  });
  it('Should calculate the correct day number as number 1', () => {
    const startDate = '2018-04-05';
    const result = currentDayNumber(startDate, TODAY);
    expect(result).toEqual(2);
  });
  it('Should calculate the correct day number as number 1', () => {
    const startDate = '2018-04-06';
    const result = currentDayNumber(startDate, TODAY);
    expect(result).toEqual(1);
  });
  it('Should return 0 if the start date is in the future', () => {
    const startDate = '2018-04-08';
    const result = currentDayNumber(startDate, TODAY);
    expect(result).toEqual(0);
  });
});
