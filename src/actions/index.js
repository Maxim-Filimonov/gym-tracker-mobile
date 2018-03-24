import Expo from 'expo';
import * as api from '../api';
import * as types from './types';
import { FACEBOOK_APP_ID, GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '../config';

export const fetchJWT = user => (dispatch) => {
  dispatch({
    type: types.FETCH_JWT_REQUEST,
    loading: true,
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
    return {
      socialUserId,
      image: picture.data.url,
      socialAppTokens: { type: 'Facebook' },
      ...rest,
    };
  }
  if (type === 'cancel') {
    return Promise.reject(new Error('User cancelled Facebook login'));
  }
  return Promise.reject(new Error('Unable to login with Facebook'));
}

async function processGoogleLogin() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      // result = { user: { email, name, photoUrl, id }
      //            accessToken, idToken, refreshToken, serverAuthCode }
      const { user, type, ...rest } = result;
      return {
        socialUserId: user.id,
        image: user.photoUrl,
        email: user.email,
        name: user.name,
        socialAppTokens: { type: 'Google', ...rest },
      };
    }
    if (result.type === 'cancel') {
      return Promise.reject(new Error('Cancelled login with Google'));
    }
    return Promise.reject(new Error('Failed to login with Google'));
  } catch (e) {
    return Promise.reject(new Error('Failed to login with Google'));
  }
}

export const loginWithFacebook = () => (dispatch) => {
  dispatch({
    type: types.LOGIN_FACEBOOK_REQUEST,
    loading: true,
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

export const loginWithGoogle = () => (dispatch) => {
  dispatch({
    type: types.LOGIN_GOOGLE_REQUEST,
    loading: true,
  });
  return processGoogleLogin()
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
