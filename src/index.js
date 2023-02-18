import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './app/store'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from './components/Login'
import Posted from './components/Posted'
import Favorites from './components/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route component = {App} path="/" exact />
          <Route component = {Login} path="/login" />
          <Route component = {Posted} path="/posts" />
          <Route component= {Favorites } path="/favorites"/>
        </Switch>
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
