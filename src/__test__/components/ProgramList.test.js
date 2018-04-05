import { shallow } from 'enzyme';
import React from 'react';
import ProgramList from '../../components/ProgramList';

describe('<ProgramList />', () => {
  it('renders the page without crashing', () => {
    const programs = {
      allPrograms: [
        { id: '1', name: 'test1', summary: 'test summary 1' },
        { id: '2', name: 'test2', summary: 'test summary 2' },
        { id: '3', name: 'test3', summary: 'test summary 3' },
        { id: '4', name: 'test4', summary: 'test summary 4' },
      ],
    };
    shallow(<ProgramList onSelectProgram={jest.fn()} programs={programs} />);
  });

  it('renders the loading page without crashing', () => {
    const programs = {
      loading: true,
    };
    shallow(<ProgramList onSelectProgram={jest.fn()} programs={programs} />);
  });
});
