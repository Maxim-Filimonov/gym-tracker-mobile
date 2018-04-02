import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';
import App from './App';
import GraphQLWrapper from '../containers/GraphQLWrapper';

const store = configureStore();

const Root = () => (
  <GraphQLWrapper>
    <Provider store={store}>
      <App />
    </Provider>
  </GraphQLWrapper>
);

export default Root;
