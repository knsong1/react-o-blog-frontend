
import './App.css';
import React from "react";
import BlogPage from './components/BlogPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='App'>
      <div className='postsWrapper'>
           <Navbar/>
          <BlogPage/>
      </div>
   
    </div>
  );
}

export default App;
