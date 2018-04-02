import { shallow } from 'enzyme';
import { Text } from 'react-native';
import React from 'react';
import GraphQLWrapper from '../../containers/GraphQLWrapper';

describe('<GraphQLWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<GraphQLWrapper><Text>Test</Text></GraphQLWrapper>);
  });
});
