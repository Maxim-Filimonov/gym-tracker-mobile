import React from 'react';
import { shallow } from 'enzyme';
import ExerciseList, { SingleExerciseView, ExercisesListView } from '../../components/ExerciseList';

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
}];

describe('<SingleExerciseView />', () => {
  it('renders without crashing', () => {
    const exercise = {
      id: 'fd861db4-afd0-4a6f-8bd0-0a4333d21ea2',
      reps: 74,
      sets: 1,
      type: 'bench press',
      comments: 'qui atque corporis at placeat et ducimus consequatur magnam ut veritatis',
    };
    shallow(SingleExerciseView(exercise));
  });
});

describe('<ExercisesListView />>', () => {
  it('renders without crashing', () => {
    shallow(<ExercisesListView exercises={exercises} />);
  });
});

describe('<ExercisesList />>', () => {
  it('renders the loading text without crashing', () => {
    const props = {
      data: {
        loading: true,
      },
    };
    shallow(<ExerciseList {...props} />);
  });
  it('renders the exercises text without crashing', () => {
    const props = {
      data: {
        findByDay: {
          exercises,
        },
      },
    };
    shallow(<ExerciseList {...props} />);
  });
});
