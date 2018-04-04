import { API_URL, APP_NAME } from '../config';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchJWT = (user) => {
  const init = {
    method: 'POST',
    body: JSON.stringify({ email: user.email, password: 'null' }),
    headers: { 'content-type': 'application/json' },
  };
  return fetch(`${API_URL}/login`, init)
    .then(
      response => response.json(),
      error => Promise.reject(new Error(error.message || `Problem connecting to ${APP_NAME}`)),
    )
    .then(({ authToken }) => ({ jwt: authToken }))
    .catch(() => Promise.reject(new Error(`Problem connecting to ${APP_NAME}.`)));
};

export const fakeFacebookLogin = (returnSuccess = true) =>
  delay(500)
    .then(() => (
      returnSuccess ?
        Promise.resolve({
          socialUserId: '0000000000000001',
          name: 'Dummy Test-Guy',
          email: 'test@user.com',
          image: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12998676_1087630357960244_4882584167328260793_n.jpg?oh=3b85a0ae065c63668282cca5f445aea9&oe=5B2F64C7',
          socialAppTokens: {
            type: 'Facebook',
            accessToken: 'myfakeaccesscodeortokenorwoteva',
            expires: 1527275629,
          },
        }) :
        Promise.reject(new Error('Failed logging in with Google'))
    ));

export const fakeGoogleLogin = (returnSuccess = true) =>
  delay(500)
    .then(() => (
      returnSuccess ?
        Promise.resolve({
          email: 'test.userh@gmail.com',
          image: 'https://lh3.googleusercontent.com/-c2s_eAAdRP8/AAAAAAAAAAI/AAAAAAAACGE/jreSaPOAvb0/photo.jpg',
          name: 'Test User',
          socialAppTokens: {
            type: 'Google',
            idToken: 'mygooglyfaceidtokes',
            refreshToken: 'mygooglyfacerefreshtokes',
            serverAuthCode: 'mygooglyfaceservertokes',
            accessToken: 'ohmygoodnessitsmyaccesstokes',
          },
          socialUserId: '111111111111111111110',
        }) :
        Promise.reject(new Error('Failed logging in with Google'))
    ));
