import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

export const deleteContact = createAction('phonebook/delete');
export const updateFilter = createAction('phonebook/updateFilter');

export { addContactRequest, addContactSuccess, addContactError };

// export const addContact = createAction('phonebook/add');
// export const deleteContact = createAction('phonebook/delete');
// export const updateFilter = createAction('phonebook/updateFilter');
