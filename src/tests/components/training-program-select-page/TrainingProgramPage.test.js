import React from 'react';
import { shallow } from 'enzyme';
import TrainingProgramPage from '../../../components/training-program-select-page/TrainingProgramPage';

describe('<TrainingProgramPage />', () => {
  it('renders without crashing', () => {
    shallow(<TrainingProgramPage />);
  });
});
