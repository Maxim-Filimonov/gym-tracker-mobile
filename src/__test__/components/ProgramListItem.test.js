import { shallow } from 'enzyme';
import React from 'react';
import ProgramListItem from '../../components/ProgramListItem';

describe('<ProgramListItem />', () => {
  it('renders without crashing', () => {
    const props = {
      id: '1234567890',
      name: 'Test name',
      summary: 'test summary...',
      onSelectProgram: jest.fn(),
    };
    shallow(<ProgramListItem {...props} />);
  });
});
