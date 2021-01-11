import React from 'react';
import './Main.css';
import JokesItem from '../JokesItem/JokesItem';
import { Link } from 'react-router-dom';

function Main(props) {

  return (
    <section className="main">
      <div className="main__buttons">
        <div className="main__load main__load-title_margin">
          <h3 className="main__load-title">Загружено шуток:</h3>
          <p className="main__load-subtitle"><span>{Object.keys(props.productsReducer).length}</span></p>
        </div>
        <div className="main__buttons-container">
          {!props.changeButton && (
            <button className="main__buttons-item main__load-title_margin" onClick={props.startServer}>Start server</button>
          )}
          {props.changeButton && (
            <button className="main__buttons-item main__load-title_margin" onClick={props.stopServer}>Stop server</button>
          )}
          <button className="main__buttons-item main__load-title_margin" onClick={props.getOneJoke}>Получить одну шутку</button>
          <Link to="/favorite" className="main__buttons-item main__buttons-item_mod">Любимые шутки</Link>
        </div>
      </div>

      {props.productsReducer.map((item, index) => {
        return (
          <JokesItem
            key={index}
            jokes={item.jokes}
            id={item.id}
            addFavorite={props.addFavorite}
            productsReducer={props.productsReducer}
            favoriteJokes={props.favoriteJokes}
            joke={item}
            deleteFavorite={props.deleteFavorite}
          />
        )
      })}
    </section>
  );
}

export default Main;
