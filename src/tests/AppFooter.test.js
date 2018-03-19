import { shallow } from 'enzyme';
import React from 'react';
import AppFooter from '../components/AppFooter';

describe('<AppFooter />', () => {
  it('renders without crashing', () => {
    shallow(<AppFooter appName="My App Name" appAuthor="Alex Bandisch " />);
  });
});
