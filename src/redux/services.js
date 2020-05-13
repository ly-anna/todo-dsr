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
function loginToServer(values, setSubmitting) {
  return axios
    .post(`${appConstants.appUrl}/login`, values)
    .then((res) => {
      setSubmitting(false);
      localStorage.setItem('user', JSON.stringify(res.data.name));
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

const logoutFromServer = () => {
  // e.preventDefault();
  localStorage.removeItem('user');
  axios
    .post(`${appConstants.appUrl}/logout`)
    .then((res) => {
      // localStorage.removeItem('user'); // не удаляет из localStorage
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const userService = {
  loginToServer,
  logoutFromServer,
};
