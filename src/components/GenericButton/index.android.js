import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, View, Text } from 'react-native';

const Button = ({ style, onPress, children }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={style}>
      <Text>{children}</Text>
    </View>
  </TouchableNativeFeedback>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.shape({}),
};
Button.defaultProps = {
  onPress: () => {},
  style: null,
};

export { Button as default };
