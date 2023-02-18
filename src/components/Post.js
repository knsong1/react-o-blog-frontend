import React from 'react';

const Post = ({post , removePostById, addingFavorites}) => {
    return (
        <div className="postBlock">
            <p>{post ? post.title : 'NOT SET'}</p>
            <p>{post ? post.post : 'NOT SET'}</p>
            <button className="remove-post" id={post ? post.id : 'NOT SET'} onClick={() => removePostById(post ? post.id : 'NOT SET')}> Remove </button>
            <button className="favorite-post" id={post ? post.postid : 'NOT SET'} onClick={() => addingFavorites(post ? post.id : 'NOT SET')}> Favorite </button>
        </div>
    )
}

export default Post; 