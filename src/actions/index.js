import * as api from '../api';
import * as types from './types';
import * as socialLogin from './socialLogin';

export const fetchJWT = user => (dispatch) => {
  dispatch({
    type: types.FETCH_JWT_REQUEST,
  });
  return api.fetchJWT(user)
    .then(
      (response) => {
        dispatch({
          type: types.FETCH_JWT_SUCCESS,
          jwt: response.jwt,
        });
      },
      (error) => {
        dispatch({
          type: types.FETCH_JWT_FAILURE,
          user,
          message: error.message || 'Something went wrong.',
        });
      },
    );
};

export const loginWithFacebook = () => (dispatch) => {
  dispatch({
    type: types.LOGIN_FACEBOOK_REQUEST,
  });
  return socialLogin.processFacebookLogin()
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
  return socialLogin.processGoogleLogin()
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
