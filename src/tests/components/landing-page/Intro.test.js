import React from 'react';
import { shallow } from 'enzyme';
import Intro from '../../../components/landing-page/Intro';

describe('<Intro />', () => {
  it('renders without crashing', () => {
    shallow(<Intro />);
  });
});
