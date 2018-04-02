import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ProgramListItem from '../../../src/components/ProgramListItem';

storiesOf('Training Program List', module)
  .add('List Item', () => {
    const props = {
      name: 'Training Program name',
      summary: 'This is the summary of the training program ... lorem ipsum so and so and so forth may the fourth be with you',
      onSelectProgram: () => console.log('selected the training program!'),
    };

    return (
      <ProgramListItem {...props} />
    );
  });
