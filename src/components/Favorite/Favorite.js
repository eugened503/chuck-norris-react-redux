import React from 'react';
import JokesItem from '../JokesItem/JokesItem';
import { Link } from 'react-router-dom';

function Favorite(props) {

  const classText = (props.favoriteJokes.length > 0) ? 'main__buttons-item' : 'main__buttons-item_none';
  const containerWidth = (props.favoriteJokes.length < 1) ? 'main__buttons_width' : 'main__buttons';
  const buttonsWidth = (props.favoriteJokes.length < 1) ? 'main__buttons-item_width' : 'main__buttons-item_mod main__load-title_margin';

  function clearList() {
    for (let i = 0; i < props.favoriteJokes.length; i++) {
      props.deleteFavorite(props.favoriteJokes[i].id);
    }
  }

  return (
    <section className="main main_color">
      <div className={`${containerWidth}`}>

        <div className="main__load main__load-title_margin">
          <h3 className="main__load-title">Сохранено шуток:</h3>
          <p className="main__load-subtitle"><span>{Object.keys(props.favoriteJokes).length}</span></p>
        </div>
        <Link to="/" className={`main__buttons-item  ${buttonsWidth}`}>На главную</Link>
        <button className={`${classText} main__load-title_margin`} onClick={clearList}>Очистить список</button>
      </div>
      {props.favoriteJokes.map((item, index) => {
        return (
          <JokesItem
            key={index}
            jokes={item.jokes}
            id={item.id}
            deleteFavorite={props.deleteFavorite}
            saveJoke={item}
            favoriteJokes={props.favoriteJokes}
          />
        )
      })}
    </section>
  );
}

export default Favorite;
