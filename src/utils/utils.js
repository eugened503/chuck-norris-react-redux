export const localStorageJokes = JSON.parse(localStorage.getItem('reduxState'));
export const getRandomId = () => {
    const number = Math.random().toString(36).substr(2, 9);
    return number;
}

