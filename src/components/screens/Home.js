import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-native';
import PropTypes from 'prop-types';
import Landing from './Landing';

const Home = ({ isLoggedIn }) => (isLoggedIn ? <Redirect to="/select-program" /> : <Landing />);

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.gymTrackerJWT,
});

export default connect(mapStateToProps)(Home);
