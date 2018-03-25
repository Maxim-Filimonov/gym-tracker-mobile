import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../../../components/exercises-page/Summary';

describe('<Summary />', () => {
  it('renders without crashing', () => {
    shallow(<Summary text="This is the test summary text" />);
  });
});
