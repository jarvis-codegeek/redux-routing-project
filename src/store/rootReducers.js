import {combineReducers} from 'redux';
import {reducer as addUser} from '../modules/addUser/store'


const reducer = combineReducers({
    ["USER_DETAILS"]: addUser
})

export default reducer;