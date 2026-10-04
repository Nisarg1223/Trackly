
import authReducer from './features/auth/state/auth.slice.js';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer:{
        auth:authReducer
    }
})