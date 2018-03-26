import * as socialAppLogin from './socialAppLogin';
import * as types from './types';
import { fetchJWT } from './index';

export const loginWithFacebook = () => (dispatch) => {
  dispatch({
    type: types.LOGIN_FACEBOOK_REQUEST,
  });
  return socialAppLogin.processFacebookLogin()
    .then(
      (user) => {
        dispatch({
          type: types.LOGIN_FACEBOOK_SUCCESS,
          user,
        });
        return dispatch(fetchJWT(user));
      },
      (error) => {
        dispatch({
          type: types.LOGIN_FACEBOOK_FAILURE,
          error: error.message || 'Problem logging in with Facebook.',
        });
      },
    );
};

export const loginWithGoogle = () => (dispatch) => {
  dispatch({
    type: types.LOGIN_GOOGLE_REQUEST,
  });
  return socialAppLogin.processGoogleLogin()
    .then(
      (user) => {
        dispatch({
          type: types.LOGIN_GOOGLE_SUCCESS,
          user,
        });
        return dispatch(fetchJWT(user));
      },
      (error) => {
        dispatch({
          type: types.LOGIN_GOOGLE_FAILURE,
          error: error.message || 'Problem logging in with Google.',
        });
      },
    );
};
