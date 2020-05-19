import axios from 'axios';
import { appConstants } from './constants';

axios.defaults.withCredentials = true;

// This will automatically send the cookie in requests.
/*
XMLHttpRequest from a different domain cannot set cookie
 values for their own domain unless withCredentials is 
 set to true before making the request.
 */

// только post
function loginToServer(values) {
  return axios.post(`${appConstants.appUrl}/login`, values);
}

const logoutFromServer = () => {
  return axios.post(`${appConstants.appUrl}/logout`);
};

export const userService = {
  loginToServer,
  logoutFromServer,
};
