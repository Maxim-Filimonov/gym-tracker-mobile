import React from 'react';
import { shallow } from 'enzyme';
import Exercise from '../../../components/exercises-page/Exercise';

describe('<Exercise />', () => {
  it('renders without crashing', () => {
    const props = {
      name: 'Test Name',
      targets: {
        sets: 1,
        reps: 2,
      },
      lastSession: {
        week: '',
        day: '',
        weight: '',
        reps: 1,
      },
      ptNote: '',
    };
    shallow(<Exercise {...props} />);
  });
});
