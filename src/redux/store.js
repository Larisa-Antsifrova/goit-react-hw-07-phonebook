// Imports from Redux Toolkit
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// Imports of middleware
import logger from 'redux-logger';
// Imports of reducers
import { phonebookReducer } from './contacts-reducers';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };

// Commented variant with Persist
// Imports from Redux Persist
// import storage from 'redux-persist/lib/storage';
// Redux Persist fix
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

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

// const persistor = persistStore(store);
// export { store, persistor };
