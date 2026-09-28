
import authReducer from '../src/features/state/auth.slice.js';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer:{
        auth:authReducer
    }
})