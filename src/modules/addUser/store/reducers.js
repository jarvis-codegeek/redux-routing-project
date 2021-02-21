import { ADD_USER, DELETE_USER, SET_UPDATE_FLAG, UPDATE_USER } from './actionTypes';

const initialState = {
    total_user_data: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER.SUCCESS: {
            let total_user = [...state.total_user_data, action.data]
            total_user.forEach((item, index) => {
                item['id'] = index + 1
            })
            console.log("from reducer", total_user)
            return { ...state, total_user_data: total_user }
        }
        case ADD_USER.ERROR: {
            return { ...state, error: action.error }
        }
        case DELETE_USER.SUCCESS:{
            let total_user = [...state.total_user_data.filter((item) => item.id !== action.data.id)]
            total_user.forEach((item, index) => {
                item['id'] = index + 1
            })
            return {...state,  total_user_data: total_user}
        }
        case DELETE_USER.ERROR: {
            return { ...state, error: action.error }
        }
        case UPDATE_USER.SUCCESS: {
            let total_user = state.total_user_data
            total_user.forEach((item, index) => {
                if(item.id === action.data.id){
                    item.id = action.data.id
                    item.fullName = action.data.fullName
                    item.emailId = action.data.emailId
                    item.mobileNo = action.data.mobileNo
                }
            })
            return {...state, total_user_data: total_user}
        }
        case UPDATE_USER.ERROR: {
            return { ...state, error: action.error }
        }

        case SET_UPDATE_FLAG.SUCCESS:{
            return {...state, existing_data: action.data, update_flag: action.flag}
        }
        case SET_UPDATE_FLAG.ERROR:{
            return {...state, error: action.error}
        }
        default: return state;
    }
}