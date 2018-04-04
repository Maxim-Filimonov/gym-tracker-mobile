import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/index';
import * as types from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('training program async actions', () => {
  describe('selectProgram', () => {
    it('creates SELECT_PROGRAM_SUCCESS when selecting a program succeeds', () => {
      const user = {};
      const programId = '123456';
      const programName = 'test program name';

      const expectedActions = [
        { type: types.SELECT_PROGRAM_REQUEST },
        {
          type: types.SELECT_PROGRAM_SUCCESS,
          strengthProgram: { programId, programName },
        },
      ];

      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json() {
            return true;
          },
        }));

      const store = mockStore({ user: {}, loading: false, program: {} });

      return store.dispatch(actions.selectProgram(user, programId, programName)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates SELECT_PROGRAM_FAILURE when selecting a program fails', () => {
      const user = {};
      const programId = '123456';
      const programName = 'test program name';

      const expectedActions = [
        { type: types.SELECT_PROGRAM_REQUEST },
        {
          type: types.SELECT_PROGRAM_FAILURE,
          message: 'Problem connecting to GymBuddy.',
        },
      ];

      global.fetch = jest.fn().mockImplementation(() => Promise.reject());

      const store = mockStore({ user: {}, loading: false, program: {} });

      return store.dispatch(actions.selectProgram(user, programId, programName)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
