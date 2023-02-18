import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        posts: []
    },
    reducers: {
        removeFavoritesById: (state, action) => {
            state.posts = state.posts.filter(posts => posts.id !== action.payload)
        }
    }
})

export const { favoritePostById } = favoritesSlice.actions;

export default favoritesSlice.reducer;