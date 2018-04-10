import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import styles from './styles';

export const SingleExerciseBox = ({
  name, lastSession, targets, ptNote, showForm, onPressAddSet,
}) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name.toUpperCase()}</Text>
    {
      lastSession ?
        (
          <View style={styles.lastSession}>
            <Text style={styles.lastSessionText}>
              Last Session: {lastSession.week} - {lastSession.day}
            </Text>
            <Text style={styles.lastSessionText}>
              Weight: {lastSession.weight} - Max Reps: {lastSession.reps}
            </Text>
          </View>
        ) :
          <View style={styles.lastSession}>
            <Text style={styles.lastSessionText}>No previous session details</Text>
          </View>
    }
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.th}>Del</Text>
        <Text style={styles.th}>Set #</Text>
        <Text style={styles.th}>Weight</Text>
        <Text style={styles.th}>Reps</Text>
        <Text style={styles.th}>Edit</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.td}>Click &apos;Add Set&apos; to record your set</Text>
      </View>
      {
        showForm ?
          <View>
            <FormLabel>Name</FormLabel>
            <FormInput />
            <FormValidationMessage>Error message</FormValidationMessage>
          </View> :
          <View style={styles.row}>
            <Button
              icon={{ name: 'add' }}
              onPress={onPressAddSet}
              buttonStyle={styles.btnAddSet}
              fontSize={15}
              title="Add Set"
            />
          </View>
      }
    </View>
    <View style={styles.targetsContainer}>
      <Text style={styles.targetsHeading}>Exercise Target Sets & Reps</Text>
      <Text style={styles.targets}>Sets: {targets.sets}, Reps: {targets.reps}</Text>
    </View>
    <View style={styles.ptNoteContainer}>
      <Text style={styles.ptNoteHeading}>Exercise Notes: </Text>
      <Text style={styles.ptNoteText}>{ptNote || 'No notes for this exercise'}</Text>
    </View>
  </View>
);

SingleExerciseBox.propTypes = {
  name: PropTypes.string.isRequired,
  lastSession: PropTypes.shape({
    week: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    reps: PropTypes.number.isRequired,
  }),
  targets: PropTypes.shape({
    sets: PropTypes.number.isRequired,
    reps: PropTypes.number.isRequired,
  }).isRequired,
  ptNote: PropTypes.string,
  showForm: PropTypes.bool.isRequired,
  onPressAddSet: PropTypes.func.isRequired,
};

SingleExerciseBox.defaultProps = {
  lastSession: null,
  ptNote: '',
};

class ExerciseBox extends React.Component {
  state = {
    showForm: false,
  };

  onPressAddSet = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  }
  render() {
    return (<SingleExerciseBox
      {...this.props}
      showForm={this.state.showForm}
      onPressAddSet={this.onPressAddSet}
    />);
  }
}

export default ExerciseBox;
