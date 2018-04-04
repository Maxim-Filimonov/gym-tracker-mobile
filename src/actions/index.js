import * as api from '../api';
import * as types from './types';

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

export const selectProgram = (user, programId, programName) => (dispatch) => {
  dispatch({
    type: types.SELECT_PROGRAM_REQUEST,
  });
  return api.selectProgram(user, programId, programName)
    .then(
      () => {
        dispatch({
          type: types.SELECT_PROGRAM_SUCCESS,
          strengthProgram: { programId, programName },
        });
      },
      (error) => {
        dispatch({
          type: types.SELECT_PROGRAM_FAILURE,
          message: error.message || 'Something went wrong setting the program.',
        });
      },
    );
};
