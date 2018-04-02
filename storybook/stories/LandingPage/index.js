import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Provider } from 'react-redux';
import LoginButtonFacebook from '../../../src/containers/LoginButtonFacebook';
import LoginButtonGoogle from '../../../src/containers/LoginButtonGoogle';
import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('Login Buttons', module)
  .add('Facebook Login', () => <Provider store={store}><LoginButtonFacebook /></Provider>)
  .add('Google Login', () => <Provider store={store}><LoginButtonGoogle /></Provider>);
