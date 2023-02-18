import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavoritesById } from '../features/posts/favorites/favoritesSlice'
import Favorites from './Favorites';
import Navbar from './Navbar';

const Favorited = () => {
    const favorites = useSelector(state => state.favorites.posts); //importing
    const dispatch = useDispatch();

    const fetchPostsToState = async () => {
        await fetch("/list-favorites/:id")
            .then(response => response.json())
            .then(json => dispatch(setPosts(json)));
    }

    const deleteFavoritesById = async (id, e) => {
        await fetch(`/delete-favorites/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            window.location.reload();
            dispatch(removeFavoritesById(id));
            
        })
    }

    useEffect(() => {
        fetchPostsToState();
    }, [])
    
    return (
        <div className="favoritesBody">
            <Navbar/>
            {favorites.map(post => 
            <Favorites post={post} key={post.id} deleteFavoritesById={deleteFavoritesById} fetchPostsToState={fetchPostsToState}/>
            )}
        </div>
    )

}

export default Favorited;

