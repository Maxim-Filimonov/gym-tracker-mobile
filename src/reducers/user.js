import * as types from '../actions/types';

const user = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_FACEBOOK_SUCCESS:
      return { ...state, ...action.user };
    case types.FETCH_JWT_SUCCESS:
      return { ...state, ...{ gymTrackerJWT: action.jwt } };
    default:
      return state;
  }
};

export default user;
