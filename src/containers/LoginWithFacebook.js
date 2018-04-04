import { connect } from 'react-redux';
import { loginWithFacebook } from '../actions/login';
import LoginFacebookButton from '../components/LoginFacebookButton';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onPressButton: () => dispatch(loginWithFacebook()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFacebookButton);
