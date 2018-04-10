import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import styles from './styles';

export const InputForm = ({ showForm, onPressToggleForm }) => (
  showForm ?
    <View style={styles.formContainer}>
      <FormLabel labelStyle={styles.formLabel}>Weight</FormLabel>
      <FormInput placeholder="E.g. 10 or Body Weight" maxLength={25} containerStyle={styles.formInput} />
      <FormLabel labelStyle={styles.formLabel}>Reps</FormLabel>
      <FormInput placeholder="Number of reps" keyboardType="numeric" maxLength={20} containerStyle={styles.formInput} />
      <Button
        icon={{ name: 'playlist-add-check' }}
        onPress={() => console.log('save new set here ... dispatch something!')}
        buttonStyle={styles.btnSave}
        fontSize={15}
        title="Save"
      />
      <Button
        icon={{ name: 'clear' }}
        onPress={onPressToggleForm}
        buttonStyle={styles.btnCancel}
        fontSize={15}
        title="Cancel"
      />
    </View> :
    <View style={styles.row}>
      <Button
        icon={{ name: 'playlist-add' }}
        onPress={onPressToggleForm}
        buttonStyle={styles.btnAddSet}
        fontSize={15}
        title="Add Set"
      />
    </View>
);

InputForm.propTypes = {
  showForm: PropTypes.bool.isRequired,
  onPressToggleForm: PropTypes.func.isRequired,
};

class SetForm extends React.Component {
  state = {
    showForm: false,
  }

  onPressToggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    return <InputForm showForm={this.state.showForm} onPressToggleForm={this.onPressToggleForm} />;
  }
}

export default SetForm;
