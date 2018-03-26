import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as login from '../../actions/login';
import * as types from '../../actions/types';
import * as socialAppLogin from '../../actions/socialAppLogin';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../actions', () => ({
  fetchJWT: jest.fn(() => () => Promise.resolve()),
}));

describe('async actions', () => {
  describe('loginWithGoogle', () => {
    it('creates a LOGIN_GOOGLE_SUCCESS when logging in a user with Google', () => {
      const mockUser = {
        socialUserId: 'test',
        image: 'image.jpg',
        email: 'test@test.com',
        name: 'test',
        socialAppTokens: { type: 'Google' },
      };

      socialAppLogin.processGoogleLogin = jest.fn(() => Promise.resolve({ ...mockUser }));

      const expectedActions = [
        { type: types.LOGIN_GOOGLE_REQUEST },
        { type: types.LOGIN_GOOGLE_SUCCESS, user: { ...mockUser } },
      ];

      const store = mockStore({ user: {}, loading: false });

      return store.dispatch(login.loginWithGoogle()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
  describe('loginWithFacebook', () => {
    it('creates a LOGIN_FACEBOOK_SUCCESS when logging in a user with Facebook', () => {
      const mockUser = {
        socialUserId: 'test',
        image: 'image.jpg',
        email: 'test@test.com',
        name: 'test',
        socialAppTokens: { type: 'Facebook' },
      };

      socialAppLogin.processFacebookLogin = jest.fn(() => Promise.resolve({ ...mockUser }));

      const expectedActions = [
        { type: types.LOGIN_FACEBOOK_REQUEST },
        { type: types.LOGIN_FACEBOOK_SUCCESS, user: { ...mockUser } },
      ];

      const store = mockStore({ user: {}, loading: false });

      return store.dispatch(login.loginWithFacebook()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
