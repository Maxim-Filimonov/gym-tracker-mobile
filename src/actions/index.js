import * as api from '../api';
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from './types';

export const loginUser = user => (dispatch) => {
  dispatch({
    type: LOGIN_USER_REQUEST,
  });
  return api.loginUser(user)
    .then(
      (response) => {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          user,
          jwtToken: response.jwt_token,
        });
      },
      (error) => {
        dispatch({
          type: LOGIN_USER_FAILURE,
          user,
          message: error.message || 'Something went wrong.',
        });
      },
    );
};
