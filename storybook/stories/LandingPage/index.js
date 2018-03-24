import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Provider } from 'react-redux';
import LandingPage from '../../../src/components/landing-page/LandingPage';
import Intro from '../../../src/components/landing-page/Intro';
import LoginButtonFacebook from '../../../src/components/buttons/LoginButtonFacebook';
import LoginButtonGoogle from '../../../src/components/buttons/LoginButtonGoogle';
import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('Landing Page', module)
  .add('default', () => (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  ));

storiesOf('Landing Page Intro Text', module)
  .add('default', () => <Intro />);

storiesOf('Login Buttons', module)
  .add('Facebook Login', () => <Provider store={store}><LoginButtonFacebook /></Provider>)
  .add('Google Login', () => <Provider store={store}><LoginButtonGoogle /></Provider>);
