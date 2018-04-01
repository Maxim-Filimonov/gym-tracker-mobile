import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import TrainingProgramListItem from '../components/training-program-select-page/TrainingProgramListItem';

const trainingProgramQuery = gql`
  {allPrograms {
    id
    name
    summary
  }}`;

const styles = StyleSheet.create({
  loading: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    minHeight: 200,
  },
  list: {
    marginTop: 10,
    marginBottom: 10,
  },
});

class TrainingProgramList extends React.Component {
  onPressItem = id => () => {
    console.log('clicked me:', id);
  };

  render() {
    const { programList, client } = this.props;
    if (programList.loading) {
      return (
        <Text style={styles.loading}>Getting Training Programs ...</Text>
      );
    }

    return (
      <FlatList
        style={styles.list}
        data={programList.allPrograms}
        renderItem={
            ({ item }) =>
              (<TrainingProgramListItem
                onSelectProgram={this.onPressItem(item.id)}
                {...item} // Contains id, name, summary
              />)
          }
        keyExtractor={item => item.id}
      />
    );
  }
}

TrainingProgramList.propTypes = {
  programList: PropTypes.PropTypes.shape({}).isRequired,
  client: PropTypes.shape({}),
};

TrainingProgramList.defaultProps = {
  client: null,
};

export default compose(
  graphql(trainingProgramQuery, { name: 'programList' }),
  withApollo,
)(TrainingProgramList);
