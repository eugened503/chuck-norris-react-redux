import { ADD_FAVORITE, DELETE_FAVORITE } from '../constants/constants';
import { localStorageJokes } from '../utils/utils';

const localStorageState = (localStorageJokes === null) ? [] : localStorageJokes;

//отдаем стейт в качесте первого элемента
export default function playlist(state = localStorageState, action) {
    if (action.type === ADD_FAVORITE) {
        return [
            ...state,
            action.payload
        ]
    }
    else if (action.type === DELETE_FAVORITE) {
        return state.filter(({ id }) => id !== action.payload.id);
    }
    return state
}
