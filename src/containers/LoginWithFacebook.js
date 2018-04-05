import { connect } from 'react-redux';
import { loginWithFacebook } from '../actions/login';
import LoginFacebookButton from '../components/LoginFacebookButton';

export const mapDispatchToProps = dispatch => ({
  onPressButton: () => dispatch(loginWithFacebook()),
});

export default connect(null, mapDispatchToProps)(LoginFacebookButton);
