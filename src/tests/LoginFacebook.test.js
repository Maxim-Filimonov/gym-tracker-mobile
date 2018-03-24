import { shallow } from 'enzyme';
import React from 'react';
import LoginButtonFacebook from '../containers/LoginButtonFacebook';

describe('<LoginButtonFacebook />', () => {
  it('renders without crashing', () => {
    shallow(<LoginButtonFacebook />);
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
    const wrapper = shallow(<LoginButtonFacebook />);
    wrapper.simulate('press');
  });
});
