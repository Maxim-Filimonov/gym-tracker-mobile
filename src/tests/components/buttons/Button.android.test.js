import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Button from '../../../components/buttons/Button/index.android';

describe('Android <Button />', () => {
  it('renders without crashing', () => {
    const props = {
      style: {},
      onPress: jest.fn(),
      children: <Text>Test Button</Text>,
    };
    shallow(<Button {...props} />);
  });

  it('executes the onPress function when pressed', () => {
    const props = {
      onPress: jest.fn(),
      styles: { buttonStyle: {}, textStyle: {} },
      children: <Text>Test</Text>,
    };
    const wrapper =
      shallow(<Button {...props} />);
    wrapper.simulate('press');
    expect(props.onPress).toHaveBeenCalled();
  });
});
