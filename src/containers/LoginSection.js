import { connect } from 'react-redux';
import LoginSection from '../components/landing-page/LoginSection';

const mapStateToProps = state => ({
  isLoading: state.loading.login,
});

export default connect(mapStateToProps)(LoginSection);
