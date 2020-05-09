import { axios } from 'axios';
import { appConstants } from './constants';

// axios.defaults.withCredentials = true;

// import { authHeader } from '../_helpers';

// function login(username, password) {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password }),
//   };

//   return fetch(`${appConstants.apiUrl}/api/v1/login`, requestOptions)
//     .then(handleResponse)
//     .then((user) => {
//       // store user details and jwt token in local storage to keep user logged in between page refreshes
//       localStorage.setItem('user', JSON.stringify(user));

//       return user;
//     });
// }

export const userService = {
  login,
  logout,
};

function login(values) {
  return axios
    .post(`${appConstants.appUrl}/login`, values)
    .then((res) => {
      console.log(res);
      console.log('res.data', res.data);
      // setSubmitting(false);
      localStorage.setItem('user', JSON.stringify(res.data.name));
      console.log(localStorage.getItem('user', JSON.stringify(res.data.name)));
      if (localStorage.getItem('user')) {
        console.log('zzzzz');
        // history.push('/');
      }
      // <Redirect to="/" />
    })
    .catch((error) => {
      console.log(error);
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

// function handleResponse(response) {
//   return response.text().then((text) => {
//     const data = text && JSON.parse(text);
//     if (!response.ok) {
//       if (response.status === 401) {
//         // auto logout if 401 response returned from api
//         logout();
//         location.reload(true);
//       }

//       const error = (data && data.message) || response.statusText;
//       return Promise.reject(error);
//     }

//     return data;
//   });
// }
