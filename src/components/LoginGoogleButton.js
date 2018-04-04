import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

const LoginGoogleButton = ({ onPressButton }) => {
  const props = {
    onPress: onPressButton,
    icon: { name: 'google', type: 'font-awesome', color: 'white' },
    title: 'Sign in with Google',
    buttonStyle: {
      backgroundColor: '#4185f4',
      marginBottom: 10,
    },
    color: 'white',
    fontWeight: 'bold',
    rounded: true,
  };
  return <Button {...props} />;
};

LoginGoogleButton.propTypes = {
  onPressButton: PropTypes.func.isRequired,
};

export default LoginGoogleButton;
