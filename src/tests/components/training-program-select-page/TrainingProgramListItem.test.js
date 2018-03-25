import React from 'react';
import { shallow } from 'enzyme';
import TrainingProgramListItem from '../../../components/training-program-select-page/TrainingProgramListItem';

describe('<TrainingProgramListItem />', () => {
  it('renders without crashing', () => {
    const props = {
      name: 'Test name',
      summary: 'test summary...',
      onSelectProgram: jest.fn(),
    };
    shallow(<TrainingProgramListItem {...props} />);
  });
});
