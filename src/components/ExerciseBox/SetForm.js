import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';
import TextField from './TextField';
import styles from './styles';

const submitInputForm = (values) => {
  console.log('submitting form', values);
  // need the exercise id
};

export const InputForm = ({ showForm, onPressToggleForm, handleSubmit }) => (
  showForm ?
    <View style={styles.formContainer}>
      <Field
        name="weight"
        label="Weight"
        placeholder="E.g. 10 or Body Weight"
        maxLength={25}
        styles={{
            formLabel: StyleSheet.flatten(styles.formLabel),
            formInput: StyleSheet.flatten(styles.formInput),
          }}
        component={TextField}
      />
      <Field
        name="reps"
        label="Reps"
        placeholder="Number of reps"
        maxLength={20}
        styles={{
            formLabel: StyleSheet.flatten(styles.formLabel),
            formInput: StyleSheet.flatten(styles.formInput),
          }}
        keyboardType="numeric"
        component={TextField}
      />
      <Button
        icon={{ name: 'playlist-add-check' }}
        onPress={handleSubmit(submitInputForm)}
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
  handleSubmit: PropTypes.func.isRequired,
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
    return (
      <InputForm
        handleSubmit={this.props.handleSubmit}
        showForm={this.state.showForm}
        onPressToggleForm={this.onPressToggleForm}
      />);
  }
}

SetForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'setForm',
})(SetForm);
