import { ADD_INTERVAL } from '../constants/constants';

const initialState = [0]
  
export default function intervalId(state = initialState, action) {
    if(action.type === ADD_INTERVAL){
        return [
            ...state,
            action.payload
        ]
    }
    return state
    }

