import { API_URL, APP_NAME } from '../config';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchJWT = (user) => {
  const init = {
    method: 'POST',
    body: JSON.stringify({ email: user.email, password: 'null' }),
    headers: new Headers({ 'content-type': 'application/json' }),
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
          socialUserId: '1747241378665802',
          name: 'Alex Bandisch',
          email: 'alex@bandisch.com',
          image: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12998676_1087630357960244_4882584167328260793_n.jpg?oh=3b85a0ae065c63668282cca5f445aea9&oe=5B2F64C7',
        }) :
        Promise.reject(new Error('Failed logging in with Google'))
    ));

export const fakeGoogleLogin = (returnSuccess = true) =>
  delay(500)
    .then(() => (
      returnSuccess ?
        Promise.resolve({
          email: 'alexander.bandisch@gmail.com',
          image: 'https://lh3.googleusercontent.com/-c2s_eAAdRP8/AAAAAAAAAAI/AAAAAAAACGE/jreSaPOAvb0/photo.jpg',
          name: 'Alex Bandisch',
          socialAppTokens: {
            type: 'Google',
            idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM3NmVhMWUyZjRjOTM3Yz…db8VMEHxNI2UK7CpcsSu8U3ZBU1spYvd5bgiRTCYf9r0vk5eA',
            refreshToken: '1/1k6gRrB8lUAb2KucMG9wWxX6AN9WCZ_Q2t0HXJxAogE',
            serverAuthCode: '4/AADIOYW08Yw5BQYnkL2IIRrm7e2Rb2-SZiZz6dydZy7nwmoV3tNrvDRh992hkqhC5VymZHc5tKqI7drawcT-T1w',
            accessToken: 'ya29.GluKBZkbZ6DMNNm1dKjL04tehpHMLBBLvqFqEnxpqVzaX…EFNnYFaKB6K-qI_6Iyjd01mfriDyoE00FifcXQlr3dvJyOFn_',
          },
          socialUserId: '116415253186278481933',
        }) :
        Promise.reject(new Error('Failed logging in with Google'))
    ));
