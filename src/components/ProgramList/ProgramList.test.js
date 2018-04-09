import { shallow } from 'enzyme';
import React from 'react';
import ProgramList, { CreateList } from '../../components/ProgramList';

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
    shallow(<ProgramList
      isLoadingSelectedProgram={false}
      onSelectProgram={jest.fn()}
      programs={programs}
    />);
  });

  it('renders the loading page without crashing', () => {
    const programs = {
      loading: true,
    };
    shallow(<ProgramList
      onSelectProgram={jest.fn()}
      programs={programs}
      isLoadingSelectedProgram={false}
    />);
  });

  it('renders loading when a program is selected without crashing', () => {
    const programs = {
      allPrograms: [],
    };
    shallow(<ProgramList
      onSelectProgram={jest.fn()}
      isLoadingSelectedProgram
      programs={programs}
    />);
  });
});

describe('<CreateList />', () => {
  it('should render the4 FlatList of training programs', () => {
    const props = {
      onSelectProgram: jest.fn(),
      allPrograms: [
        { id: '1', name: 'test1', summary: 'test summary 1' },
        { id: '2', name: 'test2', summary: 'test summary 2' },
        { id: '3', name: 'test3', summary: 'test summary 3' },
        { id: '4', name: 'test4', summary: 'test summary 4' },
      ],
    };
    shallow(<CreateList {...props} />);
  });
});
