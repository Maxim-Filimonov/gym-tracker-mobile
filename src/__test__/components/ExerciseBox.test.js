import React from 'react';
import { shallow } from 'enzyme';
import ExerciseBox from '../../components/ExerciseBox';

describe('<ExerciseBox />', () => {
  it('should render without crashing', () => {
    const props = {
      name: '', targets: { reps: 1, sets: 2 }, ptNote: '',
    };
    shallow(<ExerciseBox {...props} />);
  });

  it('should show the last session results', () => {
    const props = {
      name: '',
      lastSession: {
        week: 'week 1',
        day: 'day 1',
        weight: '20',
        reps: 10,
      },
      targets: { reps: 1, sets: 2 },
      ptNote: '',
    };
    shallow(<ExerciseBox {...props} />);
  });
});
