import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import LoginSection from '../../containers/LoginSection';

const store = configureStore();

describe('<LoginSection />', () => {
  it('renders without crashing', () => {
    shallow(<Provider store={store}><LoginSection /></Provider>);
  });
});
