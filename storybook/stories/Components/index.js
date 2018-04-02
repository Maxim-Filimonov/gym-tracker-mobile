import React from 'react';
import { Text, Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import AppFooter from '../../../src/components/AppFooter';
import AppIntro from '../../../src/components/AppIntro';
import Header from '../../../src/components/Header';
import Screen from '../../../src/components/Screen';
import ProgramListItem from '../../../src/components/ProgramListItem';

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

storiesOf('Program List Item', module)
  .add('Default', () => {
    const props = {
      id: '1234567890',
      name: 'Training Program name',
      summary: 'This is the summary of the training program ... lorem ipsum so and so and so forth may the fourth be with you',
      onSelectProgram: () => Alert.alert(
        'onSelectProgram Callback',
        'Callaback list item id: 1234567890',
      ),
    };
    return <ProgramListItem {...props} />;
  });
