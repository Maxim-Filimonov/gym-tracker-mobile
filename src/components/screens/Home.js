import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Screen from '../Screen';
import ProgramSelection from './ProgramSelection';
import Landing from './Landing';

const Home = ({ isLoggedIn }) => (
  <Screen>
    { isLoggedIn ? <ProgramSelection /> : <Landing /> }
  </Screen>
);

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.gymTrackerJWT,
});

export default connect(mapStateToProps)(Home);
