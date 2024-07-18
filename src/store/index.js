import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import registrationSlice from "@store/registrationSlice";
import todoListsSlice from "@store/todoListsSlice";

// Create the root reducer
const rootReducer = combineReducers({
  currentUser: registrationSlice,
  todoLists: todoListsSlice,
});

// Configure persist reducer
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['currentUser'], // only `currentUser` will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with persisted reducer and middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor
export const persistor = persistStore(store);
