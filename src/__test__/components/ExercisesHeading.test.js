import React from 'react';
import { shallow } from 'enzyme';
import ExercisesHeading from '../../components/ExercisesHeading';

describe('<ExercisesHeading />', () => {
  it('renders without crashing', () => {
    const props = {
      programName: 'Test Program Name',
      weekNumber: 1,
      dayNumber: 2,
    };
    shallow(<ExercisesHeading {...props} />);
  });
});
