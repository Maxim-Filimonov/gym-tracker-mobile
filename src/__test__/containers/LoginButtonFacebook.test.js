import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginFacebookButton from '../../components/LoginFacebookButton';
// import { loginWithFacebook } from '../../actions/login';

global.mount = mount;

describe('<LoginFacebookButton />', () => {
  it('renders without crashing', () => {
    shallow(<LoginFacebookButton onPressButton={jest.fn()} />);
  });

/*   it('calls loginWithFacebook when pressed', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<LoginFacebookButton dispatch={dispatch} />);
    wrapper.find('Button').simulate('press');
    expect(loginWithFacebook).toHaveBeenCalledWith(dispatch);
  }); */
});
