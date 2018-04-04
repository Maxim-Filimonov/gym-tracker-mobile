import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import LoginButtonFacebook from '../../containers/LoginButtonFacebook';
// import { loginWithFacebook } from '../../actions/login';

const store = configureStore();
global.mount = mount;

describe('<LoginButtonFacebook />', () => {
  it('renders without crashing', () => {
    shallow(<Provider store={store}><LoginButtonFacebook dispatch={jest.fn()} /></Provider>);
  });

/*   it('calls loginWithFacebook when pressed', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<LoginButtonFacebook dispatch={dispatch} />);
    wrapper.find('Button').simulate('press');
    expect(loginWithFacebook).toHaveBeenCalledWith(dispatch);
  }); */
});
