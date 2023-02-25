import React from 'react';

const Post = ({post, removePostById, addingFavorites}) => {




    return (
    
        <div className="postBlock">
            <div className='postTitle'>
                  <b><p>{post ? post.title : 'NOT SET'}</p> </b>
            </div>
         
            <p>{post ? post.post : 'NOT SET'}</p>
            <button className="remove-post" id={post ? post.id : 'NOT SET'} onClick={() => removePostById(post ? post.id : 'NOT SET')}> Remove </button>
            <button className="favorite-post" id={post ? post.id : 'NOT SET'} onClick={() => addingFavorites(post ? post.id : 'NOT SET')}> Favorite </button>
            {/* <p>{post ? Date(post.post.createdAt) : 'NOT SET'}</p> */}
        </div>
    )
}

export default Post; 