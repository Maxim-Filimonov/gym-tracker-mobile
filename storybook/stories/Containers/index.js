import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import LoginSection from '../../../src/containers/LoginSection';
import LoginWithFacebook from '../../../src/containers/LoginWithFacebook';
import LoginWithGoogle from '../../../src/containers/LoginWithGoogle';

const store = configureStore();

storiesOf('Login Section', module)
  .add('Default', () => <Provider store={store}><LoginSection /></Provider>);

storiesOf('Social Login Buttons', module)
  .add('Facebook', () => <Provider store={store}><LoginWithFacebook /></Provider>)
  .add('Google', () => <Provider store={store}><LoginWithGoogle /></Provider>);
