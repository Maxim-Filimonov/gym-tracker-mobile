import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import configureStore from '../../../configureStore';
import GraphQLWrapper from '../../../src/containers/GraphQLWrapper';
import LoginSection from '../../../src/containers/LoginSection';
import LoginButtonFacebook from '../../../src/containers/LoginButtonFacebook';
import LoginButtonGoogle from '../../../src/containers/LoginButtonGoogle';
import ProgramList from '../../../src/containers/ProgramList';

const store = configureStore();

storiesOf('Login Section', module)
  .add('Default', () => <Provider store={store}><LoginSection /></Provider>);

storiesOf('Social Login Buttons', module)
  .add('Facebook', () => <Provider store={store}><LoginButtonFacebook /></Provider>)
  .add('Google', () => <Provider store={store}><LoginButtonGoogle /></Provider>);

storiesOf('Training Program List', module)
  .add('Default', () => (
    <GraphQLWrapper>
      <NativeRouter>
        <ProgramList />
      </NativeRouter>
    </GraphQLWrapper>));
