import { connect } from 'react-redux';
import { loginWithGoogle } from '../actions/login';
import LoginGoogleButton from '../components/LoginGoogleButton';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onPressButton: () => dispatch(loginWithGoogle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginGoogleButton);
