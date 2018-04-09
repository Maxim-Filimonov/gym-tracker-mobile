import React from 'react';
import { shallow } from 'enzyme';
import LoginFacebookButton from '../../components/LoginFacebookButton';
// import { loginWithFacebook } from '../../actions/login';

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
