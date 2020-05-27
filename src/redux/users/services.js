import axios from 'axios';
import appConstants from '../../constants';

axios.defaults.withCredentials = true;

const usersFromServer = () => {
  return axios.get(`${appConstants.appUrl}/users`);
};

export default usersFromServer;
