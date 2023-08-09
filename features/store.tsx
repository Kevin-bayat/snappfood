import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import restaurantDataSlice from './restaurantData/restaurantDataSlice';

const rootReducer = combineReducers({
    restaurantData: restaurantDataSlice
});

const persistConfig = {
    key: 'root',
    version: 1,
    whitelist: ['restaurantData'],
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});
