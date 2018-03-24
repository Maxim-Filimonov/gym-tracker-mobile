import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

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
import ProgramHeading from '../../src/components/exercises-page/ProgramHeading';
import Summary from '../../src/components/exercises-page/Summary';
import Exercise from '../../src/components/exercises-page/Exercise';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';

const store = configureStore();

storiesOf('Exercise', module)
  .add('Exercise - default', () => {
    const props = {
      name: 'Dips',
      lastSession: {
        week: 'Week 1',
        day: 'Day 3',
        weight: '10',
        reps: 15,
      },
      targets: {
        sets: 1,
        reps: 5,
      },
      ptNote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. ',
    };

    return <Exercise {...props} />;
  })
  .add('Exercise - no last session details', () => {
    const props = {
      name: 'Dips',
      targets: {
        sets: 1,
        reps: 5,
      },
      ptNote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. ',
    };

    return <Exercise {...props} />;
  })
  .add('Exercise - No PT notes', () => {
    const props = {
      name: 'Dips',
      lastSession: {
        week: 'Week 1',
        day: 'Day 3',
        weight: '10',
        reps: 15,
      },
      targets: {
        sets: 1,
        reps: 5,
      },
    };

    return <Exercise {...props} />;
  });

storiesOf('Exercise Program Page', module)
  .add('Program Heading', () => {
    const props = {
      programName: 'Jumbo Exercises',
      week: 'Week 1',
      day: 'day 2',
    };
    return <ProgramHeading {...props} />;
  })
  .add('Summary', () => {
    const props = {
      text: 'PT Summary ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. Pellentesque sagittis pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. Pellentesque sagitti       text: \'PT Summary ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. Pellentesque sagittis pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. Pellentesque sagitti',
    };
    return <Summary {...props} />;
  });

storiesOf('Training Program Page', module)
  .add('default', () => (
    <TrainingProgramPage />
  ));

storiesOf('Training Program List', module)
  .add('default', () => (
    <GraphQLWrapper>
      <TrainingProgramList />
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
  .add('default', () => (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  ));

storiesOf('App Intro', module)
  .add('default', () => <Intro />);

storiesOf('App Header', module)
  .add('default', () => <Header title="Gym Tracker" />)
  .add('with slogan', () => <Header title="Gym Tracker" slogan="my cool slogan" />);

storiesOf('App Footer', module)
  .add('default', () => (<AppFooter appName="My cool app" appAuthor="Alex Bandisch" />));

storiesOf('Buttons', module)
  .add('Facebook Login', () => <Provider store={store}><LoginButtonFacebook /></Provider>)
  .add('Google Login', () => <Provider store={store}><LoginButtonGoogle /></Provider>);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ));
