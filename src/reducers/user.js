import * as actionTypes from '../actions/types';

const user = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      return { ...state, ...action.user, ...action.jwtToken };
    default:
      return state;
  }
};

export default user;
