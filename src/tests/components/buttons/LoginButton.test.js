import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import LoginButton from '../../../components/buttons/LoginButton';

describe('<LoginButton />', () => {
  it('renders without crashing', () => {
    const props = {
      onPress: jest.fn(),
      styles: { buttonStyle: {}, textStyle: {} },
      children: <Text>Test</Text>,
    };
    shallow(<LoginButton {...props} />);
  });

  it('executes the onPress function when pressed', () => {
    const props = {
      onPress: jest.fn(),
      styles: { buttonStyle: {}, textStyle: {} },
      children: <Text>Test</Text>,
    };
    const wrapper =
      shallow(<LoginButton {...props} />);
    wrapper.simulate('press');
    expect(props.onPress).toHaveBeenCalled();
  });
});
