import React from 'react';
import axios from 'axios';

function logout() {
  axios
    .post('http://localhost:3000/api/v1/logout')
    .then((res) => {
      console.log(res);
      console.log(res.data);
      localStorage.removeItem('user');
    })
    .catch((error) => {
      console.log(error);
    });
}

export default logout;
