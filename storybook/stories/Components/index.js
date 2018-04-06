import React from 'react';
import { Text, Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import AppFooter from '../../../src/components/AppFooter';
import AppIntro from '../../../src/components/AppIntro';
import Header from '../../../src/components/Header';
import Screen from '../../../src/components/Screen';
import ProgramList from '../../../src/components/ProgramList';
import ProgramListItem from '../../../src/components/ProgramListItem';
import ExercisesHeading from '../../../src/components/ExercisesHeading';
import ExerciseList from '../../../src/components/ExerciseList';

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

storiesOf('Exercises', module)
  .add('heading', () => {
    const props = {
      programName: 'Test Training Program',
      weekNumber: 1,
      dayNumber: 1,
    };
    return <ExercisesHeading {...props} />;
  })
  .add('Loading List', () => {
    const props = {
      data: {
        loading: true,
      },
    };
    return <ExerciseList {...props} />;
  })
  .add('List', () => {
    const exercises = [{
      id: 'fd861db4-afd0-4a6f-8bd0-0a4333d21ea2',
      reps: 74,
      sets: 1,
      type: 'bench press',
      comments: 'qui atque corporis at placeat et ducimus consequatur magnam ut veritatis',
    },
    {
      id: 'b5bc2ca9-6127-4718-ad2e-9c887aa502cc',
      reps: 38,
      sets: 5,
      type: 'deadlift',
      comments: 'earum enim maxime et quidem deserunt dolores soluta autem inventore est qui quia assumenda nam est qui labore cupiditate eveniet voluptate itaque non',
    },
    {
      id: 'b3b7c4ab-6d92-4e17-a683-d82d956b8546',
      reps: 35,
      sets: 3,
      type: 'squal',
      comments: 'quaerat occaecati iure fugit quos debitis et temporibus velit rerum modi quia ut impedit quasi voluptatum',
    },
    {
      id: '58fc97bb-7c34-4add-b691-6aec1beab142',
      reps: 45,
      sets: 2,
      type: 'deadlift',
      comments: 'reprehenderit hic a qui maiores ut aperiam dignissimos molestiae voluptatum est est nisi enim mollitia necessitatibus nesciunt veniam ab deserunt qui magnam debitis dicta aperiam necessitatibus nihil voluptatem cum at',
    }];
    const props = {
      data: {
        findByDay: {
          exercises,
        },
      },
    };
    return <ExerciseList {...props} />;
  });
