import React from 'react';
import { shallow } from 'enzyme';
import GrapQLWrapper from '../../../containers/GraphQLWrapper';
import ExercisesPage from '../../../components/exercises-page/ExercisesPage';

describe('<ExercisesPage />', () => {
  it('renders without crashing', () => {
    const props = {
      match: {
        params: {
          programId: 'id-of-training-program',
        },
      },
    };
    shallow(<GrapQLWrapper><ExercisesPage {...props} /></GrapQLWrapper>);
  });

  it('gets the exercises for that training program', () => {

  });
});
