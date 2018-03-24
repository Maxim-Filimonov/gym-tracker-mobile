import React from 'react';
import { storiesOf } from '@storybook/react-native';
import TrainingProgramPage from '../../../src/components/training-program-select-page/TrainingProgramPage';
import GraphQLWrapper from '../../../src/containers/GraphQLWrapper';
import TrainingProgramList from '../../../src/containers/TrainingProgramList';
import TrainingProgramListItem from '../../../src/components/training-program-select-page/TrainingProgramListItem';

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
