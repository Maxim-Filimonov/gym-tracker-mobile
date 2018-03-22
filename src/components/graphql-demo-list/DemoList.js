import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { graphql, withApollo } from 'react-apollo';

const query = gql`
  {allPrograms {
    id
    name
  }}`;

const onPressButton = client => (event) => {
  const query = gql`
    {findProgram(id: "c463acd5-59b6-4654-9ef9-c7329e9a3fe0") 
    {
      id
      name
      summary
    }}`;
  client.query({ query })
    .then(data => console.log('query data:', data));
};

let DemoList = ({ programList, client }) => {
  // console.log('programList:', programList);
  if (programList.loading) {
    return (
      <Text>Loading</Text>
    );
  }
  const list = programList.allPrograms.map(program => `id: ${program.id} | name: ${program.name}`);
  return (
    <ScrollView>
      <Text>{list}</Text>
      <Button title="Click me" onPress={onPressButton(client)} />
    </ScrollView>
  );
};

DemoList = compose(
  graphql(query, { name: 'programList' }),
  withApollo,
)(DemoList);

export default DemoList;
