import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header title="Header Title" />);
  });
});
