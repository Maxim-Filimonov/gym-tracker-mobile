import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Button from './GenericButton';

const LoginButton = ({ onPress, styles, children }) => (
  <Button style={styles.buttonStyle} onPress={onPress}>
    <Text style={styles.textStyle}>{children}</Text>
  </Button>
);

LoginButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  styles: PropTypes.shape({
    buttonStyle: PropTypes.shape({}).isRequired,
    textStyle: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default LoginButton;
