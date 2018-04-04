import React from 'react';
import { shallow } from 'enzyme';
import LoginSection from '../../components/LoginSection';

describe('<LoginSection />', () => {
  it('renders without crashing', () => {
    shallow(<LoginSection isLoading={false} />);
  });
  it('renders the loading screen', () => {
    shallow(<LoginSection isLoading />);
  });
});
