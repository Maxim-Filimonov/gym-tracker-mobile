import { shallow } from 'enzyme';
import React from 'react';
import LoginButton from '../components/buttons/LoginButton';

describe('<LoginButton />', () => {
  it('renders without crashing', () => {
    const func = jest.fn();
    const styles = { textStyle: {}, buttonStyle: {} };
    shallow(<LoginButton onPress={func} styles={styles}>Test Login Button</LoginButton>);
  });

  it('calls the onPress function when pressed', () => {
    const callback = jest.fn();
    const styles = { textStyle: {}, buttonStyle: {} };
    const wrapper =
      shallow(<LoginButton onPress={callback} styles={styles}>Test Login Button</LoginButton>);
    wrapper.simulate('press');
    expect(callback).toHaveBeenCalled();
  });
});
