import React, { useState } from "react";
import { useSelector } from "react-redux";



const SearchBar = ({setPostArray}) => {

 const [term, setTerm] = useState("");
//  const [postArray, setPostArray] = useState([])

 const posts = useSelector(state => state.posts.posts); 
 console.log(posts, "I am in SearchBar")


 const submitHandler = (e) => {
    e.preventDefault();

    const temppostArray = posts.filter(post => {
         console.log(post, "listing array")
        return post.post.toLowerCase().includes(term)  
       
    });
    setPostArray(temppostArray)
    console.log(temppostArray, "list array")
 } 

   const reloadHandler = (e) => {
        setTerm(e.target.value)
        if (e.target.value === '') {
            setPostArray([])
        }
   }
 

return (
    <div>
        
            <form onSubmit={submitHandler}>
                <input type="text" value={term} placeholder='Find your post...'
                onChange={(e) => reloadHandler(e)} />
                <button type='submit'> Search </button>
            </form>
            
    </div>
)

}

export default SearchBar
    


                 