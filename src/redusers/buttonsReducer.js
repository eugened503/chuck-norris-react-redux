import { CHANGE_BUTTON } from '../constants/constants';

const initialState = {
    changeOn: false 
}
 
export default function changeButton(state = initialState, action) {
    if(action.type === CHANGE_BUTTON){
        return {
            ...state,
            changeOn: action.payload
        }
    } 
    return state
    }

