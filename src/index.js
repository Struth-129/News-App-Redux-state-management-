import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, useSelector } from 'react-redux'
import store from './redux/store';
import HomePage from './Components/Homepage';
import Navbar from './Components/Navbar';
import BlogPage from './Components/BlogPage';
import { selectSignedIn } from './features/userSlice';
ReactDOM.render(

  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
