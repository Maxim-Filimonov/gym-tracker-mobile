import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../components/Root';

describe('<Root />', () => {
  it('renders without crashing', () => {
    shallow(<Root />);
  });
});
