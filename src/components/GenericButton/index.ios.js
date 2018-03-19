import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

const Button = ({ style, onPress, children }) => (
  <TouchableOpacity style={style} onPress={onPress}>{children}</TouchableOpacity>
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
