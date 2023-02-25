import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/posts/postSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [post, setPosts] = useState('');

    const dispatch = useDispatch();

    const submitForm = async () => {
        await fetch('/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               post: post, 
               title: title
            }),
        })
        .then((response) => response.json()) 
        .then((data) => {
            console.log('Success:', data);
            dispatch(addPost(data));
            setTitle("");
            setPosts("");
        })
        .catch((error) =>
        console.log("Unable to add post", error)
        )
    }
    
    return (
        <form id="add-post" onSubmit={submitForm} >
            <label htmlFor="title">Title:</label><br/>
            <input onChange={(event) => setTitle(event.target.value)} type="text" id="title" name="title" placeholder="Title for Post" required/><br/>
            <label htmlFor="post">Post:</label><br/>
            <input onChange={(event) => setPosts(event.target.value)} type="text" id="post" name="post" placeholder="Thoughts for the day..." required/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default AddPostForm;