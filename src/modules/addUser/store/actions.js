import { ADD_USER, GET_USER, DELETE_USER, UPDATE_USER, SET_UPDATE_FLAG } from './actionTypes'

const addUser = (data) => {
    return {
        type: ADD_USER.ACTION,
        data
    }
}


const getUserList = (data) => {
    return {
        type: GET_USER.ACTION,
        data
    }
}

const deleteUser = (data) => {
    return{
        type: DELETE_USER.ACTION,
        data
    }
}

const updateUser = (data) => {
    return{
        type: UPDATE_USER.ACTION,
        data
    }
}

const setUpdateFlag = (data, flag)  => {
    return {
        type: SET_UPDATE_FLAG.ACTION,
        data,
        flag
    }
}

export { addUser, getUserList, deleteUser, updateUser, setUpdateFlag }