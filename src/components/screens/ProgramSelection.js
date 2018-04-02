import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../Screen';
import ProgramList from '../../containers/ProgramList';

const ProgramSelection = () => (
  <Screen showFooter={false}>
    <View style={{ flex: 1 }}>
      <Text>Some intro text here about the training programs .... lorem ipsim</Text>
      <ProgramList />
    </View>
  </Screen>);

export default ProgramSelection;
