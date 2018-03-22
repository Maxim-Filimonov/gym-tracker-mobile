import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Button from './Button';

const ProgramButton = ({ name }) => (
  <Button>
    <Text>{name}</Text>
  </Button>
);

ProgramButton.propTypes = {
  name: PropTypes.string.isRequired,
};
