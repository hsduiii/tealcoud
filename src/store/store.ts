import { Action, configureStore, getDefaultMiddleware, ThunkAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/root';

const persistConfig = {
	key: 'store',
	version: 1,
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: persistedReducer,
	middleware: [...getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })]
});

export type AppDispatch = typeof store.dispatch;
export type AppState = () => RootState;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;