// Imports from Redux Toolkit
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// Imports from Redux Persist
// import storage from 'redux-persist/lib/storage';
// Redux Persist fix
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// Imports of middleware
import logger from 'redux-logger';
// Imports of reducers
import { phonebookReducer } from './phonebook-reducers';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const phonebookPersistConfig = {
//   key: 'phonebook',
//   storage,
//   blacklist: ['filter'],
// };

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(phonebookPersistConfig, phonebookReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV !== 'production',
// });

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

// const persistor = persistStore(store);

export { store };
// export { store, persistor };
