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

export const fakeFacebookLogin = () => delay(500).then(() => (
  {
    socialUserId: '1747241378665802',
    name: 'Alex Bandisch',
    email: 'alex@bandisch.com',
    image: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12998676_1087630357960244_4882584167328260793_n.jpg?oh=3b85a0ae065c63668282cca5f445aea9&oe=5B2F64C7',
  }));
