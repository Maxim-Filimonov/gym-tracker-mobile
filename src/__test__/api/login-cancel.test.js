import { processFacebookLogin, processGoogleLogin } from '../../api/logins';

jest.mock('../../api/expoLogin', () => ({
  ExpoFacebookLogin: () => ({ type: 'cancel' }),
  ExpoGoogleLogin: () => ({ type: 'cancel' }),
}));

describe('# processFacebookLogin - cancel', () => {
  it('should provide an error when user cancels login with Facebook', async () => {
    processFacebookLogin()
      .catch(err => expect(err).toEqual('Error: User cancelled Facebook login'));
  });
});

describe('# processGoogleLogin - cancel', () => {
  it('should provide an error when user cancels login with Google', async () => {
    processGoogleLogin()
      .catch(err => expect(err).toEqual('Error: User cancelled Google login'));
  });
});
