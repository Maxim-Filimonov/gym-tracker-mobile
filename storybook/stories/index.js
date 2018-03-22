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
import LoginButtonFacebook from '../../src/components/buttons/LoginButtonFacebook';
import LoginButtonGoogle from '../../src/components/buttons/LoginButtonGoogle';
import LandingPage from '../../src/components/landing-page/LandingPage';
import Intro from '../../src/components/landing-page/Intro';
import GraphQLWrapper from '../../src/containers/GraphQLWrapper';
import DemoList from '../../src/components/graphql-demo-list/DemoList';
import ProgramButton from '../../src/components/buttons/ProgramButton';

storiesOf('Training Program List', module)
  .add('default', () => (
    <GraphQLWrapper>
      <DemoList />
    </GraphQLWrapper>
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
  .add('Facebook Login', () => <LoginButtonFacebook />)
  .add('Google Login', () => <LoginButtonGoogle />)
  .add('Training Program', () => <ProgramButton />);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ));
