import axios from 'axios';
import appConstants from '../../constants';

axios.defaults.withCredentials = true;

export const todosFromServer = () => {
  return axios.get(`${appConstants.appUrl}/todos`);
};

export const addTodoToServer = (values) => {
  return axios.post(`${appConstants.appUrl}/todos`, values);
};

export const deleteTodoFromServer = (id) => {
  console.log('id from deleteTodoFromServer', id);
  return axios.delete(`${appConstants.appUrl}/todos/${id}`);
};
