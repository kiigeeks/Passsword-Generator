import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    passwordLogs: [],
}

export const passwordSlice = createSlice({
    name: 'password',
    initialState: initialState,
    reducers: {
        addPassword: (state, action) => {
            const highestId = state.passwordLogs.reduce((maxId, log) => Math.max(log.id, maxId), 0);
            const newId = highestId + 1;
            const newItem = action.payload;

            state.passwordLogs.push({
                ...newItem,
                id: newId,
                time: new Date().toISOString(),
            })
        },
        removePassword: (state, action) => {
            const selectItem = action.payload;
            const updatedLogs = state.passwordLogs.filter((password) => password.id !== selectItem.id);
            state.passwordLogs = updatedLogs;
        },
        clearPasswordLogs: (state) => {
            state.passwordLogs = [];
            localStorage.clear();
        },

    },
})

export const { addPassword, removePassword, clearPasswordLogs } = passwordSlice.actions;
export default passwordSlice.reducer;

// selector
export const selectPasswordLogs = state => state.password.passwordLogs