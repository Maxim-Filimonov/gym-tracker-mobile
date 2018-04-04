import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import configureStore from '../../../configureStore';
import GraphQLWrapper from '../../../src/containers/GraphQLWrapper';
import LoginSection from '../../../src/containers/LoginSection';
import LoginWithFacebook from '../../../src/containers/LoginWithFacebook';
import LoginWithGoogle from '../../../src/containers/LoginWithGoogle';
import ProgramList from '../../../src/containers/ProgramList';

const store = configureStore();

storiesOf('Login Section', module)
  .add('Default', () => <Provider store={store}><LoginSection /></Provider>);

storiesOf('Social Login Buttons', module)
  .add('Facebook', () => <Provider store={store}><LoginWithFacebook /></Provider>)
  .add('Google', () => <Provider store={store}><LoginWithGoogle /></Provider>);

storiesOf('Training Program List', module)
  .add('Default', () => (
    <GraphQLWrapper>
      <NativeRouter>
        <ProgramList />
      </NativeRouter>
    </GraphQLWrapper>));
