import { connect } from 'react-redux';
import { loginWithGoogle } from '../actions/login';
import LoginGoogleButton from '../components/LoginGoogleButton';

export const mapDispatchToProps = dispatch => ({
  onPressButton: () => dispatch(loginWithGoogle()),
});

export default connect(null, mapDispatchToProps)(LoginGoogleButton);
