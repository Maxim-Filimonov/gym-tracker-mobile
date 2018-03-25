import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { API_URL } from '../../config';
import * as actions from '../../actions';
import * as types from '../../actions/types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('fetchJWT', () => {
    it('creates FETCH_JWT_SUCCESS when fetching JWT is done', () => {
      fetchMock
        .post(
          `${API_URL}/login`,
          {
            body: { email: 'test@test.com', password: null },
            headers: { 'content-type': 'application/json' },
          },
        );

      const expectedActions = [
        { type: types.FETCH_JWT_REQUEST, loading: true },
        { type: types.FETCH_JWT_SUCCESS, jwt: undefined },
      ];

      const user = {
        socialUserId: 'test',
        image: 'image.jpg',
        email: 'test@test.com',
        name: 'test',
        socialAppTokens: { type: 'Google' },
      };

      const store = mockStore({ });

      return store.dispatch(actions.fetchJWT(user)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('loginWithGoogle', () => {
    it('creates a LOGIN_GOOGLE_SUCCESS when logging in a user with Google', () => {
      const mockUser = {
        socialUserId: 'test',
        image: 'image.jpg',
        email: 'test@test.com',
        name: 'test',
        socialAppTokens: { type: 'Google' },
      };

      // actions.processGoogleLogin = jest.fn().mockImplementation(() =>
      //   Promise.resolve({
      //     user: { ...mockUser },
      //   }));

      const expectedActions = [
        { type: types.LOGIN_GOOGLE_REQUEST, loading: true },
        { type: types.LOGIN_GOOGLE_SUCCESS, user: { ...mockUser } },
      ];

      const store = mockStore({ });

      return store.dispatch(actions.loginWithGoogle()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
