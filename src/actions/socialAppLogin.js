import Expo from 'expo';
import { FACEBOOK_APP_ID, GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '../config';

export async function processFacebookLogin() {
  const {
    type, token, expires,
  } = await Expo.Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
    permissions: ['public_profile', 'email'],
  });
  if (type === 'success') {
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`);
    // response.json() = {
    // id: string, email: string, name: string
    // picture: { data: { image, ...rest} } }
    const { id: socialUserId, picture, ...rest } = await response.json();
    return {
      socialUserId,
      image: picture.data.url,
      socialAppTokens: { type: 'Facebook', accessToken: token, expires },
      ...rest,
    };
  }
  if (type === 'cancel') {
    return Promise.reject(new Error('User cancelled Facebook login'));
  }
  return Promise.reject(new Error('Unable to login with Facebook'));
}

export async function processGoogleLogin() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      // result = { user: { email, name, photoUrl, id }
      //            accessToken, idToken, refreshToken, serverAuthCode }
      const { user, type, ...rest } = result;
      return {
        socialUserId: user.id,
        image: user.photoUrl,
        email: user.email,
        name: user.name,
        socialAppTokens: { type: 'Google', ...rest },
      };
    }
    if (result.type === 'cancel') {
      return Promise.reject(new Error('Cancelled login with Google'));
    }
    return Promise.reject(new Error('Failed to login with Google'));
  } catch (e) {
    return Promise.reject(new Error('Failed to login with Google'));
  }
}
