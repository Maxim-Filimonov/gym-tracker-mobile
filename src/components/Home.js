import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LandingPage from './landing-page/LandingPage';
import TrainingProgramPage from './training-program-select-page/TrainingProgramPage';

const Home = ({ isLoggedIn }) => (isLoggedIn ? <TrainingProgramPage /> : <LandingPage />);

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.gymTrackerJWT ? true : false,
});

export default connect(mapStateToProps)(Home);
