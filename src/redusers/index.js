import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import productsReducer from './productsReducer';
import intervalId from './intervalId';
import changeButton from './buttonsReducer';
import favoriteJokes from './favoriteJokes';

export default combineReducers ({
routing: routerReducer,   
productsReducer,
intervalId,
changeButton,
favoriteJokes,
})
