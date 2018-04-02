import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Header from '../../../src/components/Header';
import AppFooter from '../../../src/components/AppFooter';
import Screen from '../../../src/components/Screen';

storiesOf('Screen', module)
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

storiesOf('App Header', module)
  .add('default', () => <Header title="Gym Tracker" />)
  .add('with slogan', () => <Header title="Gym Tracker" slogan="my cool slogan" />);

storiesOf('App Footer', module)
  .add('default', () => (<AppFooter appName="My cool app" appAuthor="Alex Bandisch" />));
