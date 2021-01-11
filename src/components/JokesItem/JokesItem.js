import React from 'react';
import './JokesItem.css';
import { useLocation } from 'react-router-dom';

function JokesItem(props) {
    const { pathname } = useLocation();

    React.useEffect(() => {
        if (Object.keys(props.favoriteJokes).length > 10) {
            props.deleteFavorite(props.favoriteJokes[0].id); //удаляем первый элемент
            for (let i = 11; i < props.favoriteJokes.length; i++) { //если элементов больше 10-ти, то удаляем их по id
                props.deleteFavorite(props.favoriteJokes[i].id);
            }
        }
    }, []);

    function saveJokes(e) {
        e.preventDefault();
        props.addFavorite({
            id: props.id,
            jokes: props.jokes,
        })
    }

    function deleteJokes(e) {
        e.preventDefault();
        let result = props.favoriteJokes.filter(function (obj) { //получаем шутку по jokes
            return obj.jokes == props.joke.jokes;
        });
        props.deleteFavorite(result[0].id); //удаляем шутку из сохраненных по нажатию на зеленую кнопку
    }

    function deleteFavoriteJokes(e) {
        e.preventDefault();
        props.deleteFavorite(props.id)

    }

    const button = (
        <div>
            {pathname === '/' && props.favoriteJokes.some(item => item.jokes === props.joke.jokes) && (
                <button className="jokes__save-button_marker" onClick={deleteJokes} />
            )}
            {pathname === '/' && !props.favoriteJokes.some(item => item.jokes === props.joke.jokes) && (
                <button className="jokes__save-button" onClick={saveJokes} />

            )}
            {pathname === '/favorite' && (
                <button className="jokes__delete-button" onClick={deleteFavoriteJokes}></button>
            )}
        </div>
    )
    return (
        <article className="jokes">
            <p className="jokes__body">{props.jokes}</p>
            {button}
        </article>
    );
}

export default JokesItem