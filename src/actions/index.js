import Expo from 'expo';
import * as api from '../api';
import * as types from './types';
import { FACEBOOK_APP_ID } from '../config';

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

async function processFacebookLogin() {
  const {
    type, token,
  } = await Expo.Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
    permissions: ['public_profile', 'email'],
  });
  if (type === 'success') {
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`);
    // response.json() = {
    // id: string, email: string, name: string
    // picture: { data: { image, ...rest} } }
    const { id: socialUserId, picture, ...rest } = await response.json();
    return { socialUserId, image: picture.data.url, ...rest };
  }
  if (type === 'cancel') {
    return Promise.reject(new Error('User cancelled Facebook login'));
  }
  return Promise.reject(new Error('Unable to login with Facebook'));
}

export const loginWithFacebook = () => (dispatch) => {
  dispatch({
    type: types.LOGIN_FACEBOOK_REQUEST,
  });
  return processFacebookLogin()
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
