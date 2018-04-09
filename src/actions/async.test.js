import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { LOGIN_API_URL, STR_TRCKR_API_URL } from '../config';
import * as actions from './index';
import * as types from './types';
import { SSL_OP_CIPHER_SERVER_PREFERENCE } from 'constants';

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
          `${LOGIN_API_URL}`,
          {
            body: { email: 'test@test.com', password: null },
            headers: { 'content-type': 'application/json' },
          },
        );

      const expectedActions = [
        { type: types.FETCH_JWT_REQUEST },
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

    it('creates FETCH_JWT_FAILURE if fetching JWT fails', () => {
      fetchMock
        .post(
          `${LOGIN_API_URL}`,
          Promise.reject(new Error('An error')),
        );

      const user = {
        socialUserId: 'test',
        image: 'image.jpg',
        email: 'test@test.com',
        name: 'test',
        socialAppTokens: { type: 'Google' },
      };

      const expectedActions = [
        { type: types.FETCH_JWT_REQUEST },
        { type: types.FETCH_JWT_FAILURE, message: 'Problem connecting to GymBuddy.', user: { ...user } },
      ];

      const store = mockStore({ });

      return store.dispatch(actions.fetchJWT(user)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('selectProgram', () => {
    it('creates SELECT_PROGRAM_SUCCESS when selectProgram request is done', () => {
      const programId = 'testid';
      const programName = 'test-name';
      const startDate = new Date().toISOString().split('T')[0];
      fetchMock
        .put(
          `${STR_TRCKR_API_URL}/programs/${programId}`,
          {
            body: { },
            headers: { 'content-type': 'application/json' },
          },
        );

      const expectedActions = [
        { type: types.SELECT_PROGRAM_REQUEST },
        {
          type: types.SELECT_PROGRAM_SUCCESS,
          strengthProgram: {
            id: programId,
            name: programName,
            startDate,
          },
        },
      ];

      const store = mockStore({ user: { gymTrackerJWT: 'test-token' } });

      return store.dispatch(actions.selectProgram(programId, programName)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates SELECT_PROGRAM_SUCCESS if api call fails', () => {
      const programId = 'testid';
      const programName = 'test-name';
      fetchMock
        .put(
          `${STR_TRCKR_API_URL}/programs/${programId}`,
          Promise.reject(new Error('Error message')),
        );

      const expectedActions = [
        { type: types.SELECT_PROGRAM_REQUEST },
        { type: types.SELECT_PROGRAM_FAILURE, message: 'Problem connecting to GymBuddy.' },
      ];

      const store = mockStore({ user: { gymTrackerJWT: 'test-token' } });

      return store.dispatch(actions.selectProgram(programId, programName)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
