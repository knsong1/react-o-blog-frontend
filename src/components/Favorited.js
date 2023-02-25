import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavoritesById } from '../features/posts/favorites/favoritesSlice'
import Favorites from './Favorites';


const Favorited = () => {
    const favorites = useSelector(state => state.favorites.favorites); //importing
    console.log(favorites, "Did we grab Favorites?")
    const dispatch = useDispatch();

   
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
       
            {favorites.map(favorite => 
            <Favorites favorite={favorite} key={favorite.id} deleteFavoritesById={deleteFavoritesById} fetchPostsToState={fetchPostsToState}/>
            )}
        </div>
    )

}

export default Favorited;

