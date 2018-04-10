import React from 'react';
import { shallow } from 'enzyme';
import ExerciseBox, { SingleExerciseBox, LastSessionBox } from './index';

describe('<ExerciseBox />', () => {
  it('should render without crashing', () => {
    const props = {
      id: 'test-id',
      name: '',
      targets: { reps: 1, sets: 2 },
      ptNote: '',
      onPressAddSet: jest.fn(),
      showForm: false,
    };
    shallow(<ExerciseBox {...props} />);
  });

  it('should show the last session results', () => {
    const props = {
      id: 'test-id',
      name: '',
      lastSession: {
        week: 'week 1',
        day: 'day 1',
        weight: '20',
        reps: 10,
      },
      targets: { reps: 1, sets: 2 },
      ptNote: '',
      onPressToggleForm: jest.fn(),
      showForm: false,
    };
    shallow(<SingleExerciseBox {...props} />);
  });

  it('should show the add set form when pressing the Add Set button', () => {
    const props = {
      id: 'test-id',
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
    const wrapper = shallow(<ExerciseBox {...props} />);
    wrapper.find('SingleExerciseBox').simulate('pressToggleForm');
    expect(wrapper.find('SingleExerciseBox').prop('showForm')).toEqual(true);
  });
});


describe('<LastSessionBox />', () => {
  it('renders without crashing', () => {
    const props = {
      lastSession: {
        week: 'week 1',
        day: 'day 1',
        weight: '20',
        reps: 10,
      },
    };
    shallow(<LastSessionBox {...props} />);
  });
});

