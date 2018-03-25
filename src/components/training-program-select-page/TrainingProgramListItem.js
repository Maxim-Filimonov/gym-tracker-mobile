import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const styles = {
  container: {
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    color: '#222',
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 15,
    color: '#222',
  },
};

class TrainingProgramListItem extends React.Component {
  state = {
    showSummary: false,
  };

  handlePressProgram = () => {
    this.setState({
      showSummary: !this.state.showSummary,
    });
  };

  render() {
    const { name, summary, onSelectProgram } = this.props;
    const selectButtonProps = {
      rightIcon: { name: 'check-circle' },
      title: 'Select Training Program',
      onPress: onSelectProgram,
      buttonStyle: {
        backgroundColor: '#31bb5a',
      },
    };
    const programButtonProps = {
      rightIcon: { name: 'info-outline' },
      title: name,
      onPress: this.handlePressProgram,
      buttonStyle: {
        backgroundColor: '#003366',
      },
    };
    return (
      <View style={styles.container}>
        <Button {...programButtonProps} />
        {this.state.showSummary && (
          <View>
            <Text style={styles.heading}>Program Summary</Text>
            <Text style={styles.text}>{summary}</Text>
            <Button {...selectButtonProps} />
          </View>)}
      </View>
    );
  }
}

TrainingProgramListItem.propTypes = {
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  onSelectProgram: PropTypes.func.isRequired,
};

export default TrainingProgramListItem;
