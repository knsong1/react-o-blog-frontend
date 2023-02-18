import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        addPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
        },
        deletePostById: (state, action) => {
            state.posts = state.posts.filter(posts => posts.id !== action.payload)
        },
        favoritePostById: (state, action) => {
            state.posts = state.posts.filter(posts => posts.id !== action.payload)
        }
    }
})

export const { setPosts, addPost, deletePostById, favoritePostById } = postSlice.actions;

export default postSlice.reducer;