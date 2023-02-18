import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postSlice'
import loginReducer from '../features/posts/login/loginSlice'
import favoritesReducer from '../features/posts/favorites/favoritesSlice'


export default configureStore( {
    reducer: {
        posts: postsReducer,
        login: loginReducer,
        favorites: favoritesReducer
    }
})