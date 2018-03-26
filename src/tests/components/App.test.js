import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import App from '../../components/App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const store = configureStore();
    shallow(<Provider store={store}><App /></Provider>);
  });
});
