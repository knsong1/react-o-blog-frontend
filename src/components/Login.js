import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../features/posts/login/loginSlice';
import BlogPage from './BlogPage';
import Navbar from './Navbar';


const LoginForm = () => {

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');

    const isLoggedIn = useSelector(state => state.login.isLoggedIn)

    const dispatch = useDispatch();

    const submitForm = async (event) => {
        await fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: userName,
                email: email,
                lastName: lastName,
                firstName: firstName,
                password: password
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            dispatch(logIn(data));

        })
    }

    return (
       
        <div  id="login-box"> 
            <Navbar/>
            {isLoggedIn ? (
                <BlogPage/>
            ) : (
           
        <form id='add-user' onSubmit={submitForm}>
            <div className='login-lables'>
                <label htmlFor="userName">First Name: </label><br></br>
            </div>
                <input onChange={(event) => setFirstName(event.target.value)} type="text" id="firstName" name="firstName" placeholder="John" required/><br></br>
            <div className='login-lables'>
            <label htmlFor="name">Last Name:</label><br></br>
            </div>
                <input onChange={(event) => setLastName(event.target.value)}  type="text" id="lastName" name="lastName" placeholder="Doe" required/><br></br>
            <div className='login-lables'>
                <label htmlFor="userName">Username:</label><br></br>
            </div>
                <input onChange={(event) => setUsername(event.target.value)} type="text" id="userName" name="userName" placeholder="John123" required/><br></br>
            <div className='login-lables'>
             <label className="login-labels" htmlFor="email">Email Address:</label><br></br>
            </div>
                 <input onChange={(event) => setEmail(event.target.value)} type="email" id="email" name="email" placeholder="john.doe@gmail.com" required/><br></br>
            <div className='login-label'>
                 <label className="login-labels" htmlFor="password">Password:</label><br></br>
            </div>

              <div className="login-labels"/>
            <input onChange={(event) => setPassword(event.target.value)} type="password" id="password" name="password" placeholder="123abc!..." required/><br></br>
            <input type="submit" id="add-userBtn" value="Submit"/>
    
        </form>
    )}
</div>
    )
}

export default LoginForm;

