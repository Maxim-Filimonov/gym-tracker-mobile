import * as types from '../actions/types';

const user = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_FACEBOOK_SUCCESS:
    case types.LOGIN_GOOGLE_SUCCESS:
      return { ...state, ...action.user, loginLoading: false };
    case types.FETCH_JWT_SUCCESS:
      return { ...state, ...{ gymTrackerJWT: action.jwt, loginLoading: false } };
    case types.LOGIN_FACEBOOK_REQUEST:
    case types.LOGIN_GOOGLE_REQUEST:
      return { loginLoading: action.loading };
    case types.FETCH_JWT_REQUEST:
      return { ...state, ...{ loginLoading: action.loading } };
    default:
      return state;
  }
};

export default user;
