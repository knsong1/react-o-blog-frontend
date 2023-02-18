import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        toggleLoggedIn: state => {
            state.isLoggedIn = !state.isLoggedIn
        },
        logIn: state => {
            state.isLoggedIn = true
        },
        logOut: state => {
            state.isLoggedIn = false
        }
    }
})

export const { toggleLoggedIn, logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer



