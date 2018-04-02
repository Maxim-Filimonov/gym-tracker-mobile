import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Stack from 'react-router-native-stack';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';
import Home from './screens/Home';
import GraphQLWrapper from '../containers/GraphQLWrapper';
import ExercisesPage from '../components/exercises-page/ExercisesPage';

const store = configureStore();

const Root = () => (
  <GraphQLWrapper>
    <Provider store={store}>
      <NativeRouter>
        <Stack>
          <Route exact path="/" component={Home} />
          <Route exact path="/exercises/:programId" component={ExercisesPage} />
        </Stack>
      </NativeRouter>
    </Provider>
  </GraphQLWrapper>
);

export default Root;
