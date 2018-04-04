import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Provider } from 'react-redux';
import { NativeRouter, Redirect, Route } from 'react-router-native';
import { View, Text } from 'react-native';
import GraphQLWrapper from '../../../src/containers/GraphQLWrapper';
import ProgramExercises from '../../../src/components/screens/ProgramExercises';
import configureStore from '../../../configureStore';
import Landing from '../../../src/components/screens/Landing';
import ProgramSelection from '../../../src/components/screens/ProgramSelection';
// import { Exercises, ExercisesView } from '../../../src/components/screens/Exercises';

const store = configureStore();

storiesOf('Screens', module)
  .add('Landing', () =>
    (
      <Provider store={store}>
        <Landing />
      </Provider>
    ))
  .add('Program Selection', () =>
    (
      <GraphQLWrapper>
        <NativeRouter>
          <ProgramSelection />
        </NativeRouter>
      </GraphQLWrapper>
    ))
  .add('Exercises Screen with Router', () => (
    <GraphQLWrapper>
      <NativeRouter>
        <View>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/exercises/1742e8f9-2fb7-4dba-9787-4b84dc680d84" />}
          />
          <Route path="/exercises/:programId" component={ProgramExercises} />
        </View>
      </NativeRouter>
    </GraphQLWrapper>
  ));

/*   .add('Exercises', () => {
    const match = { params: { programId: '1742e8f9-2fb7-4dba-9787-4b84dc680d84' } };
    return (
      <GraphQLWrapper>
        <Exercises match={match} />
      </GraphQLWrapper>
    );
  }); */
/*   .add('ExercisesView', () => {
    const exercises = [{ name: 'ex1' }, { name: 'more ppush ups' }];
    console.log(ExercisesView);
    return (
      <View>
        <Text>what if</Text>
      </View>
    );
    return (
      <ExercisesView exercises={exercises} />
    );
  }); */

