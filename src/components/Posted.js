import React, { useEffect } from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { deletePostById, setPosts } from '../features/posts/postSlice';
import Navbar from './Navbar';

export function Posted() {
    const posts = useSelector(state => state.posts.posts); 
    const dispatch = useDispatch();

    const fetchPostsToState = async () => {
        await fetch("/list-posts")
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

    const onSearchChange = (value) => {
        const newData= posts.filter(cust=> cust.title.includes(value))
        console.log(newData, "did we grab titles?")
    }

    useEffect(() => {
        fetchPostsToState();
    }, [])


    return (
        <div>
            <input type="search" 
            onChange={(e) => onSearchChange(e.target.value)}            />
            <h1>All </h1>
             <Navbar/>
           {posts.map(post => 
            <Post post={post} key={post.id} removePostById={removePostById} fetchPostsToState={fetchPostsToState} onSearchChange={onSearchChange}/>
            )} 
        </div>
 
     
     
    )
}

export default Posted