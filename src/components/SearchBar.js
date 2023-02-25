import React, { useState } from "react";
import { useSelector } from "react-redux";



const SearchBar = ({setPostArray}) => {

 const [term, setTerm] = useState("");
//  const [postArray, setPostArray] = useState([])

 const posts = useSelector(state => state.posts.posts); 



 const submitHandler = (e) => {
    e.preventDefault();

    const temppostArray = posts.filter(post => {
   
        return post.post.toLowerCase().includes(term)  
       
    });
    setPostArray(temppostArray)

 } 

   const reloadHandler = (e) => {
        setTerm(e.target.value)
        if (e.target.value === '') {
            setPostArray([])
        }
   }
 

return (
    <div className="postsWrapper">
        
            <form className="postForm" onSubmit={submitHandler}>
                <input type="text" value={term} placeholder='Find your post...'
                onChange={(e) => reloadHandler(e)} />
                <button type='submit'> Search </button>
            </form>
            
    </div>
)

}

export default SearchBar
    


                 