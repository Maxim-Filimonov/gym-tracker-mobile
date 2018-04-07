import { processFacebookLogin, processGoogleLogin } from '../../api/logins';

jest.mock('../../api/expoLogin', () => ({
  ExpoFacebookLogin: () => ({ type: undefined }),
  ExpoGoogleLogin: () => ({ type: undefined }),
}));

describe('# processFacebookLogin - fail', () => {
  it('should provide an error when user fails to login with Facebook', async () => {
    processFacebookLogin()
      .catch(err => expect(err).toEqual('Error: Unable to login with Facebook'));
  });
});

describe('# processGoogleLogin - fail', () => {
  it('should provide an error when user fails to login with Google', async () => {
    processGoogleLogin()
      .catch(err => expect(err).toEqual('Error: Failed to login with Google'));
  });
});
