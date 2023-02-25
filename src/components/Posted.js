import React, { useEffect, useState } from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { deletePostById, setPosts, favoritePostById } from '../features/posts/postSlice';
import Navbar from './Navbar';
import SearchBar from './SearchBar';


const Posted = () => {
    const posts = useSelector(state => state.posts.posts); 
    const [postArray, setPostArray] = useState([])

   
    const dispatch = useDispatch();

    const fetchPostsToState = async () => {
        await fetch("/list-posts")
            .then(response => response.json())
            .then(json => dispatch(setPosts(json)));
    } 

    const fetchFavoritesToState = async () => {
        await fetch("/list-favorites")
            .then(response => response.json())
            .then(json => dispatch(setPosts(json)));
    }

    const removePostById = async (id, e) => {
        await fetch(`/delete-posts/${id}`, {
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
            dispatch(deletePostById(id));
            
        })
    }

    const addingFavorites = async (id) => {
        await fetch(`/add-favorites/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            window.location.reload();
            dispatch(favoritePostById(id));
            
        })
    }

    useEffect(() => {
        fetchPostsToState();
    }, [])



    return (

                <div>  
             <Navbar/>
             <h1 className='cloud'>All Posts</h1>
           <SearchBar setPostArray={setPostArray}/>
           <div className='postsWrapper'>
              {
           postArray.length !== 0
           ?
           postArray.map(post => 
           
            <Post post={post} key={post.id} fetchFavoritesToState={fetchFavoritesToState} addingFavorites={addingFavorites} removePostById={removePostById} fetchPostsToState={fetchPostsToState}/>
            )
            :
            posts.map(post => 
            <Post post={post}  key={post.id}  fetchFavoritesToState={fetchFavoritesToState} addingFavorites={addingFavorites} removePostById={removePostById} fetchPostsToState={fetchPostsToState}/>
            )} 
           </div>
         
            
        </div>
 
    
 
     
     
    )
}

export default Posted;