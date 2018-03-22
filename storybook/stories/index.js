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
import TrainingProgramList from '../../src/containers/TrainingProgramList';
import TrainingProgramListItem from '../../src/components/training-program-select-page/TrainingProgramListItem';
import TrainingProgramPage from '../../src/components/training-program-select-page/TrainingProgramPage';
import ProgramButton from '../../src/components/buttons/ProgramButton';

const programList = {
  allPrograms: [
    {
      id: 'ab463b8b-a76c-4f6a-a726-75ab5730b69b',
      name: 'Sit odio dolor',
      summary: 'Accusantium laborum voluptatem debitis dolorum enim.',
    },
    {
      id: '56c355d8-1a81-432e-97a3-c48dd86a5c5d',
      name: 'Quam eum',
      summary: 'Accusantium laborum voluptatem debitis dolorum enim.',
    },
    {
      id: 'ccc3252f-9a8c-46b5-8876-d0a0011a56f2',
      name: 'Quis enim',
      summary: 'Accusantium laborum voluptatem debitis dolorum enim.',
    },
    {
      id: 'a66b89f5-6151-43ec-98fd-4a3e5157a70d',
      name: 'Ut esse eveniet',
      summary: 'Accusantium laborum voluptatem debitis dolorum enim.',
    },
    {
      id: 'e37d9b0c-9eb4-4011-851f-73c0acedb8ce',
      name: 'Dolor minus ad',
      summary: 'Accusantium laborum voluptatem debitis dolorum enim.',
    },
    {
      id: '73e9acbb-573e-4f24-af42-ac390ec4d12f',
      name: 'Voluptate voluptas totam',
      summary: 'Accusantium laborum voluptatem debitis dolorum enim.',
    },
    {
      id: 'c463acd5-59b6-4654-9ef9-c7329e9a3fe0',
      name: 'Sed ut debitis',
      summary: 'Accusantium laborum voluptatem debitis dolorum enim.',
    },
    {
      id: '469e32fa-8e56-48e5-8e1a-2288a4c6c510',
      name: 'Placeat fugit magni',
      summary: 'Accusantium laborum voluptatem debitis dolorum enim.',
    },
    {
      id: '817a2564-fce4-464c-bf54-7aba24bd5ade',
      name: 'Et aut sint',
      summary: 'Accusantium laborum voluptatem debitis dolorum enim.',
    },
    {
      id: '55b93dc3-ea7b-4ef5-8681-af08d651a164',
      name: 'At aut earum',
      summary: 'Accusantium laborum voluptatem debitis dolorum enim.',
    },
  ],
};

storiesOf('Training Program Page', module)
  .add('default', () => (
    <TrainingProgramPage />
  ));

storiesOf('Training Program List', module)
  .add('default', () => (
    <GraphQLWrapper>
      <TrainingProgramList programList={programList} />
    </GraphQLWrapper>
  ))
  .add('List Item', () => {
    const props = {
      name: 'Training Program name',
      summary: 'This is the summary of the training program ... lorem ipsum so and so and so forth may the fourth be with you',
      onSelectProgram: () => console.log('selected the training program!'),
    };

    return (
      <TrainingProgramListItem {...props} />
    );
  });

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
