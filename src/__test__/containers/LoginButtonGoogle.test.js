import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import LoginButtonGoogle from '../../containers/LoginButtonGoogle';
// import { loginWithGoogle } from '../../actions/login';

const store = configureStore();
global.mount = mount;

describe('<LoginButtonGoogle />', () => {
  it('renders without crashing', () => {
    shallow(<Provider store={store}><LoginButtonGoogle dispatch={jest.fn()} /></Provider>);
  });

  /*
  it('calls loginWithGoogle when pressed', () => {
    const dispatch = jest.fn();
    const wrapper =
      mount(<Provider store={store}><LoginButtonGoogle dispatch={dispatch} /></Provider>);
    wrapper.find('Button').simulate('press');
    expect(loginWithGoogle).toHaveBeenCalledWith(dispatch);
  });
  */
});
