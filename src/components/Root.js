import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';
import App from './App';
import GraphQLWrapper from '../containers/GraphQLWrapper';

const store = configureStore();

const Root = () => (
  <NativeRouter>
    <GraphQLWrapper>
      <Provider store={store}>
        <Route path="/" component={App} />
      </Provider>
    </GraphQLWrapper>
  </NativeRouter>
);

export default Root;
