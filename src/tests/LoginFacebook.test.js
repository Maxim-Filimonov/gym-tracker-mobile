import { shallow } from 'enzyme';
import React from 'react';
import LoginFacebook from '../components/LoginFacebook';

describe('<LoginFacebook />', () => {
  it('renders without crashing', () => {
    shallow(<LoginFacebook />);
  });
  it('returns the Facebook details of the user', () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json() {
          return {
            id: 'test id',
            name: 'test name',
            email: 'test@test.com',
          };
        },
      }));
    const wrapper = shallow(<LoginFacebook />);
    wrapper.simulate('press');
  });
});
