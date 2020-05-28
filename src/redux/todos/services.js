import axios from 'axios';
import appConstants from '../../constants';

axios.defaults.withCredentials = true;

const todosFromServer = () => {
  return axios.get(`${appConstants.appUrl}/todos`);
};

export default todosFromServer;
