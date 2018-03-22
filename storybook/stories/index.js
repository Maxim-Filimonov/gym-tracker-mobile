import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import Header from '../../src/components/Header';
import AppFooter from '../../src/components/AppFooter';
import LoginFacebook from '../../src/components/landing-page/LoginFacebook';
import LoginGoogle from '../../src/components/landing-page/LoginGoogle';
import LandingPage from '../../src/components/landing-page/LandingPage';
import Intro from '../../src/components/landing-page/Intro';
import GraphqlWrapper from '../../src/components/GraphqlWrapper';
import TrainingProgramList from '../../src/components/TrainingProgramsList';
// import ProgramButton from '../../src/components/ProgramButton';

storiesOf('Training Program List', module)
  .add('default', () => (
    <GraphqlWrapper>
      <TrainingProgramList />
    </GraphqlWrapper>
  ));

storiesOf('Landing Page', module)
  .add('default', () => <LandingPage />);

storiesOf('App Intro', module)
  .add('default', () => <Intro />);

storiesOf('App Header', module)
  .add('default', () => <Header title="Gym Tracker" />)
  .add('with slogan', () => <Header title="Gym Tracker" slogan="my cool slogan" />);

storiesOf('App Footer', module)
  .add('default', () => (<AppFooter appName="My cool app" appAuthor="Alex Bandisch" />));

storiesOf('Buttons', module)
  .add('Facebook Login', () => <LoginFacebook />)
  .add('Google Login', () => <LoginGoogle />)
  .add('Training Program', () => <ProgramButton />);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ));
