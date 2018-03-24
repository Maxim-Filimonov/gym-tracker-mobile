import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Header from '../../../src/components/Header';
import AppFooter from '../../../src/components/AppFooter';

storiesOf('App Header', module)
  .add('default', () => <Header title="Gym Tracker" />)
  .add('with slogan', () => <Header title="Gym Tracker" slogan="my cool slogan" />);

storiesOf('App Footer', module)
  .add('default', () => (<AppFooter appName="My cool app" appAuthor="Alex Bandisch" />));
