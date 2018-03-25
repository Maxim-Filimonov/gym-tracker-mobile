import React from 'react';
import { shallow } from 'enzyme';
import ProgramHeading from '../../../components/exercises-page/ProgramHeading';

describe('<ProgramHeading />', () => {
  it('renders without crashing', () => {
    const props = {
      programName: 'test program name',
      week: 'week 1',
      day: 'day 1',
    };
    shallow(<ProgramHeading {...props} />);
  });
});
