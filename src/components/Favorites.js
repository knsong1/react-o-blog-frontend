import React from 'react';

const Favorites = ({favorite,deleteFavoritesById }) => {
    return (
        <div className="postBlock">
            <p>{favorite ? favorite.title : 'NOT SET'}</p>
            <p>{favorite ? favorite.post : 'NOT SET'}</p>
            <button className="remove-post" id={favorite ? favorite.postid : 'NOT SET'} onClick={() => deleteFavoritesById(favorite ? favorite.postid : 'NOT SET')}> Remove </button>
        </div>
    )
}

export default Favorites;