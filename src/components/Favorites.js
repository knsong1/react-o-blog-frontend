import React from 'react';
import Navbar from './Navbar';

const Favorites = ({favorite,deleteFavoritesById }) => {
    return (   
    <div>
    <Navbar></Navbar>
   
        <div className="postBlock">
            <p>{favorite ? favorite.id : 'NOT SET'}</p>
            <button className="remove-favorite" id={favorite ? favorite.id : 'NOT SET'} onClick={() => deleteFavoritesById(favorite ? favorite.postid : 'NOT SET')}> Remove </button>
        </div> 
    </div>
    )
}

export default Favorites;