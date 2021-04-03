import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contacts-actions';
import { deleteContact, updateFilter } from './contacts-actions';

const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});

export const phonebookReducer = combineReducers({
  items,
  filter,
  loading,
});
