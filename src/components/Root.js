import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Stack from 'react-router-native-stack';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';
import GraphQLWrapper from '../containers/GraphQLWrapper';
import ProgramExercises from './screens/ProgramExercises';
import Home from './screens/Home';
import ProgramSelection from './screens/ProgramSelection';

const store = configureStore();

const Root = () => (
  <GraphQLWrapper>
    <Provider store={store}>
      <NativeRouter>
        <Stack>
          <Route exact path="/" component={Home} />
          <Route path="/select-program" component={ProgramSelection} />
          <Route path="/exercises" component={ProgramExercises} />
        </Stack>
      </NativeRouter>
    </Provider>
  </GraphQLWrapper>
);

export default Root;
