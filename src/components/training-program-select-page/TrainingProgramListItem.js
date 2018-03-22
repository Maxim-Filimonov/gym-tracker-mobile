import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Button from '../buttons/Button';

const styles = {
  container: {
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  showButton: {
    backgroundColor: '#003366',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectButton: {
    backgroundColor: '#31bb5a',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    color: '#eee',
  },
  summaryContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
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
    return (
      <View style={styles.container}>
        <Button style={styles.showButton} onPress={this.handlePressProgram}>
          <Text style={styles.text}>
            {name} &#9432;
          </Text>
        </Button>
        {this.state.showSummary && (
          <View style={styles.summaryContainer}>
            <Text style={styles.heading}>Program Summary</Text>
            <Text>{summary}</Text>
            <Button style={styles.selectButton} onPress={onSelectProgram}>
              <Text style={styles.text}>Select Training Program &#10003;</Text>
            </Button>
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
