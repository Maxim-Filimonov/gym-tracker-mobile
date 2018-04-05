import React from 'react';
import { Text, Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import AppFooter from '../../../src/components/AppFooter';
import AppIntro from '../../../src/components/AppIntro';
import Header from '../../../src/components/Header';
import Screen from '../../../src/components/Screen';
import ProgramList from '../../../src/components/ProgramList';
import ProgramListItem from '../../../src/components/ProgramListItem';
// import Exercises from '../../../src/components/Exercises';

storiesOf('Screen Template', module)
  .add('default', () =>
    (
      <Screen>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce hendrerit felis et massa fringilla, hendrerit bibendum
          libero rutrum. Mauris volutpat mattis aliquam. Nulla ac orci id
          massa malesuada posuere. Nulla maximus lectus et rhoncus blandit.
          Sed a orci ac nulla sodales pharetra. Quisque eget congue lacus.
            Nam ac arcu metus.
        </Text>
      </Screen>
    ))
  .add('without footer', () =>
    (
      <Screen showFooter={false}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce hendrerit felis et massa fringilla, hendrerit bibendum
          libero rutrum. Mauris volutpat mattis aliquam. Nulla ac orci id
          massa malesuada posuere. Nulla maximus lectus et rhoncus blandit.
          Sed a orci ac nulla sodales pharetra. Quisque eget congue lacus.
            Nam ac arcu metus.
        </Text>
      </Screen>
    ));

storiesOf('App Components', module)
  .add('Header', () => <Header title="Gym Tracker" />)
  .add('Header with slogan', () => <Header title="Gym Tracker" slogan="my cool slogan" />)
  .add('Footer', () => <AppFooter appName="My cool app" appAuthor="Alex Bandisch" />)
  .add('App Intro', () => <AppIntro />);

storiesOf('Training Program List', module)
  .add('Default', () => {
    const props = {
      onSelectProgram: (id, name) => Alert.alert(
        'onSelectProgram Callback',
        `\nClick Callback\n\nProgram id: ${id}\nProgram name: ${name}`,
      ),
      programs: {
        allPrograms: [
          { id: 'uuid-01', name: 'test1', summary: 'test summary 1' },
          { id: 'uuid-02', name: 'test2', summary: 'test summary 2' },
          { id: 'uuid-03', name: 'test3', summary: 'test summary 3' },
          { id: 'uuid-04', name: 'test4', summary: 'test summary 4' },
        ],
      },
    };
    return <ProgramList {...props} />;
  })
  .add('list item', () => {
    const props = {
      id: '1234567890',
      name: 'Training Program name',
      summary: 'This is the summary of the training program ... lorem ipsum so and so and so forth may the fourth be with you',
      onSelectProgram: () => Alert.alert(
        'onSelectProgram Callback',
        '\nClick Callback\n\nProgram id: 1234567890\nProgram name: Training Program name',
      ),
    };
    return <ProgramListItem {...props} />;
  });


/* storiesOf('Exercises', module)
  .add('Default', () => {
    const props = {
      isLoading: false,
      exercises: [],
    };
    return <Exercises {...props} />;
  })
  .add('Loading', () => {
    const props = {
      isLoading: true,
      exercises: [],
    };
    return <Exercises {...props} />;
  }); */
