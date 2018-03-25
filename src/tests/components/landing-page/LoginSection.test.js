import React from 'react';
import { shallow } from 'enzyme';
import LoginSection from '../../../components/landing-page/LoginSection';

describe('<LoginSection />', () => {
  it('renders without crashing', () => {
    shallow(<LoginSection />);
  });
});
