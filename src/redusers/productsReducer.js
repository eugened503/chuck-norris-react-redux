import { getRandomId } from '../utils/utils';
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../constants/constants';

const initialState = [];

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return [
                ...state,
                {
                    id: getRandomId(),
                    jokes: action.payload,
                }
            ]
        case FETCH_PRODUCTS_ERROR:
            return [
                ...state,
                { error: action.error }
            ]

        default:
            return state;
    }
}
