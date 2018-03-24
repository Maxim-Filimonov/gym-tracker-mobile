import * as types from '../actions/types';

const loading = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_FACEBOOK_REQUEST:
    case types.LOGIN_GOOGLE_REQUEST:
    case types.FETCH_JWT_REQUEST:
      return { ...state, login: action.loading };
    case types.LOGIN_FACEBOOK_SUCCESS:
    case types.LOGIN_GOOGLE_SUCCESS:
    case types.FETCH_JWT_SUCCESS:
    case types.LOGIN_FACEBOOK_FAILURE:
    case types.LOGIN_GOOGLE_FAILURE:
    case types.FETCH_JWT_FAILURE:
      return { ...state, login: false };
    default:
      return state;
  }
};

export default loading;
