import { configureStore } from '@reduxjs/toolkit';
import passwordSlice from './features/password/passwordSlice';


export default configureStore({
    reducer: {
        password: passwordSlice,
    }
});