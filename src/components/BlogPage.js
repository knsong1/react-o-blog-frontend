import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deletePostById, setPosts} from '../features/posts/postSlice';
import Post from './Post';
import AddPostForm from './AddPostForm';


const BlogPage = () => {
    const posts = useSelector(state => state.posts.posts); //importing data
    console.log(posts)
    const dispatch = useDispatch(); //exporting data

    const fetchPostsToState = async () => {
        await fetch("/list-posts")
            .then(response => response.json())
            .then(json => dispatch(setPosts(json)));
    }

    const fetchFavoritesToState = async () => {
        await fetch("/list-favorites/:id")
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

    // const addingFavorites = async (id) => {
    //     await fetch(`/add-favorites/:id`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ id }),
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log('Success:', data);
    //         window.location.reload();
    //         dispatch(favoritePostById(id));
            
    //     })
    // }


    useEffect(() => {
        fetchPostsToState();
    }, [])
    
    return (
        <div className="body">
        
            <AddPostForm/>
            {posts.map(post => 
            <Post post={post} key={post.id} fetchFavoritesToState={fetchFavoritesToState}  removePostById={removePostById} fetchPostsToState={fetchPostsToState}/>
            )}
        </div>
    )

}

export default BlogPage;

