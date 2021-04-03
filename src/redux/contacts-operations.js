import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contacts-actions';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export { addContact };
