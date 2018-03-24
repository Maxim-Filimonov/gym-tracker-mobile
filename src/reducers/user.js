import * as types from '../actions/types';

const user = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_FACEBOOK_SUCCESS:
      return { ...state, ...action.user };
    case types.FETCH_JWT_SUCCESS:
      return { ...state, ...{ jwtToken: action.jwtToken } };
    default:
      return state;
  }
};

export default user;
