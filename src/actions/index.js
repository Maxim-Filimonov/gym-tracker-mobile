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
          jwtToken: response.jwt_token,
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
    // Get the user's name and email using Facebook's Graph API
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email`);
    // return response.json(); // userData = {id: string, email: string, name: string }
    const { id: socialId, ...rest } = await response.json();
    return { socialId, ...rest };
    // userData = {id: string, email: string, name: string }
    // const userData = await response.json();
    // return userData;
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
        return user;
      },
      (error) => {
        dispatch({
          type: types.LOGIN_FACEBOOK_FAILURE,
          error: error.message || 'Something went wrong logging in with Facebook',
        });
      },
    )
    .then(user => dispatch(fetchJWT(user)));
};
