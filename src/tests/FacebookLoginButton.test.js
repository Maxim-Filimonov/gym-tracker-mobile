import { shallow } from 'enzyme';
import React from 'react';
import FacebookLoginButton from '../components/FacebookLoginButton';

describe('<FacebookLoginButton />', () => {
  it('renders without crashing', () => {
    shallow(<FacebookLoginButton />);
  });
});
