import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import Root from '../../components/Root';

describe('<App />', () => {
  it('renders without crashing', () => {
    const store = configureStore();
    shallow(<Provider store={store}><Root /></Provider>);
  });
});
