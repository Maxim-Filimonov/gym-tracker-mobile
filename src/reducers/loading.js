import * as types from '../actions/types';

const initialState = { login: false };

const loading = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_FACEBOOK_REQUEST:
    case types.LOGIN_GOOGLE_REQUEST:
    case types.FETCH_JWT_REQUEST:
      return { ...state, login: true };
    case types.LOGIN_FACEBOOK_SUCCESS:
    case types.LOGIN_GOOGLE_SUCCESS:
    case types.FETCH_JWT_SUCCESS:
    case types.LOGIN_FACEBOOK_FAILURE:
    case types.LOGIN_GOOGLE_FAILURE:
    case types.FETCH_JWT_FAILURE:
      return { ...state, login: false };
    case types.SELECT_PROGRAM_REQUEST:
      return { ...state, selectProgram: true };
    case types.SELECT_PROGRAM_FAILURE:
    case types.SELECT_PROGRAM_SUCCESS:
      return { ...state, selectProgram: false };
    default:
      return state;
  }
};

export default loading;
