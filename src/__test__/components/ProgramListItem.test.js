import { shallow } from 'enzyme';
import React from 'react';
import ProgramListItem, { ListItem } from '../../components/ProgramListItem';

describe('<ProgramListItem />', () => {
  it('renders without crashing', () => {
    const props = {
      id: '1234567890',
      name: 'Test name',
      summary: 'test summary...',
      onPressSelectProgram: jest.fn(),
    };
    shallow(<ProgramListItem {...props} />);
  });

  it('should show the summary when the program is pressed', () => {
    const props = {
      id: '1234567890',
      name: 'Test name',
      summary: 'test summary...',
      onPressSelectProgram: jest.fn(),
    };
    const wrapper = shallow(<ProgramListItem {...props} />);
    wrapper.find('ListItem').simulate('pressShowSummary');
    expect(wrapper.find('ListItem').prop('showSummary')).toEqual(true);
  });

  it('renders the ListItem without summary', () => {
    const props = {
      name: 'Test name',
      summary: 'test summary...',
      onPressSelectProgram: jest.fn(),
      onPressShowSummary: jest.fn(),
      showSummary: false,
    };
    shallow(<ListItem {...props} />);
  });

  it('renders the ListItem with summary', () => {
    const props = {
      name: 'Test name',
      summary: 'test summary...',
      onPressSelectProgram: jest.fn(),
      onPressShowSummary: jest.fn(),
      showSummary: true,
    };
    shallow(<ListItem {...props} />);
  });
});
