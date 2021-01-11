import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './redusers'
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(()=>{
   localStorage.setItem('reduxState', JSON.stringify(store.getState().favoriteJokes)) //сохраняем стейт в localStorage
 })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
 <BrowserRouter> 
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();