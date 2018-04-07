import { processFacebookLogin, processGoogleLogin } from '../../api/logins';

jest.mock('../../api/expoLogin', () => ({
  ExpoFacebookLogin: () => ({ type: 'success', token: 'token-1234567890', expires: 'expires-1234567890' }),
  ExpoGoogleLogin: () => ({
    type: 'success',
    accessToken: 'accessToken-1234567890',
    idToken: 'idToken-1234567890',
    refreshToken: 'refreshToken-1234567890',
    serverAuthCode: 'serverAuthCode-1234567890',
    user: {
      id: 'userid-1234567890',
      email: 'test@test.com',
      familyName: 'Last',
      givenName: 'First',
      name: 'First Last Name',
      photoUrl: '/path/to/image.jpg',
    },
  }),
}));

describe('# processFacebookLogin - success', () => {
  it('should successfully login with Facebook', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json() {
          return ({
            id: 'testid-1234567890',
            picture: {
              data: {
                height: 50,
                width: 50,
                is_silhouette: false,
                url: '/path/to/image.jpg',
              },
            },
            name: 'Test Name',
            email: 'test@test.com',
          });
        },
      }));

    const expectedResult = {
      socialUserId: 'testid-1234567890',
      image: '/path/to/image.jpg',
      socialAppTokens:
     {
       type: 'Facebook',
       accessToken: 'token-1234567890',
       expires: 'expires-1234567890',
     },
      name: 'Test Name',
      email: 'test@test.com',
    };

    processFacebookLogin().then(result => expect(result).toEqual(expectedResult));
  });
});

describe('# processGoogleLogin - success', () => {
  it('should successfully login with Google', async () => {
    const expectedResult = {
      socialUserId: 'userid-1234567890',
      image: '/path/to/image.jpg',
      email: 'test@test.com',
      name: 'First Last Name',
      socialAppTokens: {
        type: 'Google',
        accessToken: 'accessToken-1234567890',
        idToken: 'idToken-1234567890',
        refreshToken: 'refreshToken-1234567890',
        serverAuthCode: 'serverAuthCode-1234567890',
      },
    };

    processGoogleLogin().then(result => expect(result).toEqual(expectedResult));
  });
});

