import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import LoginSection from '../../../src/containers/LoginSection';
import FacebookLoginButton from '../../../src/components/LoginButton/FacebookLogin';
import GoogleLoginButton from '../../../src/components/LoginButton/GoogleLogin';

const store = configureStore();

storiesOf('Login Section', module)
  .add('Default', () => <Provider store={store}><LoginSection /></Provider>);

storiesOf('Social Login Buttons', module)
  .add('Facebook', () => <Provider store={store}><FacebookLoginButton /></Provider>)
  .add('Google', () => <Provider store={store}><GoogleLoginButton /></Provider>);
