import React from 'react';
import { shallow } from 'enzyme';
import LoginGoogleButton from '../../components/LoginGoogleButton';
// import { loginWithGoogle } from '../../actions/login';

describe('<LoginGoogleButton />', () => {
  it('renders without crashing', () => {
    shallow(<LoginGoogleButton onPressButton={jest.fn()} />);
  });

  /*
  it('calls loginWithGoogle when pressed', () => {
    const dispatch = jest.fn();
    const wrapper =
      mount(<Provider store={store}><LoginGoogleButton dispatch={dispatch} /></Provider>);
    wrapper.find('Button').simulate('press');
    expect(loginWithGoogle).toHaveBeenCalledWith(dispatch);
  });
  */
});
