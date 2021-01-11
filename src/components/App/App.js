import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Favorite from '../Favorite/Favorite';

import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  CHANGE_BUTTON,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  ADD_INTERVAL
} from '../../constants/constants';


function App(props) {

  let timerJokes; // переменная для записи id функции setInterval
  const largest = props.intervalId.reduce(function (x, y) { //наибольшее значечение, последний id setInterval
    return (x > y) ? x : y;
  });

  function addFavorite(data) {
    props.onAddFavorite({
      id: data.id,
      jokes: data.jokes,
    });
  }

  function startServer() {
    props.fetchProducts()
    timerJokes = setInterval(() => props.fetchProducts(), 3000);
    props.onAddId(timerJokes);  //передаем id setInterval в стейт
    props.onChangeButton(true); //меняем кнопку
  }

  function getOneJoke() {
    props.fetchProducts();
  }

  function stopServer() {
    clearInterval(largest); //удаляем по наибольшему id setInterval
    props.onChangeButton(false);
  }

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main
            productsReducer={props.productsReducer} //полученные статьи
            favoriteJokes={props.favoriteJokes} //сохраненные статьи
            startServer={startServer}
            getOneJoke={getOneJoke}
            stopServer={stopServer}
            changeButton={props.changeButton.changeOn}
            addFavorite={addFavorite}
            deleteFavorite={props.deleteFavorite}
          />
        </Route>
        <Route exact path="/favorite">
          <Favorite
            favoriteJokes={props.favoriteJokes} //сохраненные статьи
            deleteFavorite={props.deleteFavorite}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default connect(
  (state, ownProps) => ({ //глобальное состояние стора
    ownProps,
    productsReducer: state.productsReducer,
    intervalId: state.intervalId,
    changeButton: state.changeButton,
    favoriteJokes: state.favoriteJokes,

  }),
  dispatch => ({
    fetchProducts: () => {
      dispatch({ type: "FETCH_PRODUCTS_PENDING" });
      return fetch('https://api.chucknorris.io/jokes/random', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            throw (res.error);
          }
          dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.value });
        })
        .catch(error => {
          dispatch({ type: FETCH_PRODUCTS_ERROR, error: error });
        })
    },
    onAddId: (dataId) => {
      dispatch({ type: ADD_INTERVAL, payload: dataId })
    },

    onChangeButton: (change) => {
      dispatch({ type: CHANGE_BUTTON, payload: change })
    },

    onAddFavorite: (jokes) => {
      dispatch({ type: ADD_FAVORITE, payload: jokes })
    },

    deleteFavorite: (id) => {
      dispatch({ type: DELETE_FAVORITE, payload: { id } })
    },

  }),
)(App);


