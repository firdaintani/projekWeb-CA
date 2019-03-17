import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReduxThunk from 'redux-thunk'
import Reducers from './2. reducers';
import 'semantic-ui-css/semantic.min.css'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


const VariabelGlobal=createStore(Reducers,{},applyMiddleware(ReduxThunk)) //buat bikin jadi global
ReactDOM.render(<Provider store={VariabelGlobal}> <BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
