import {takeEvery, put, call} from 'redux-saga/effects'
import {ADD_USER, DELETE_USER, GET_USER, UPDATE_USER, SET_UPDATE_FLAG} from './actionTypes'

export function* doAddUser(action) {
    const {data} = action
    try{
        yield put({ type: ADD_USER.SUCCESS, data })
    }catch(error){
        yield put({type: ADD_USER.ERROR, error})
    }
} 

export function* doGetUser(action) {
    const {data} = action
    try{
        yield put({ type: GET_USER.SUCCESS, data })
    }catch(error){
        yield put({type: GET_USER.ERROR, error})
    }
} 

export function* doDeleteUser(action) {
    const {data} = action
    try{
        yield put({ type: DELETE_USER.SUCCESS, data })
    }catch(error){
        yield put({type: DELETE_USER.ERROR, error})
    }
}

export function* doSetUpdateFlag(action) {
    const {data, flag} = action
    try{
        yield put({ type: SET_UPDATE_FLAG.SUCCESS, data, flag })
    }catch(error){
        yield put({type: SET_UPDATE_FLAG.ERROR, error})
    }
}

export function* doUpdateUser(action){
    const {data} = action
    try{
        yield put({ type: UPDATE_USER.SUCCESS, data})
    }catch(error){
        yield put({ type: UPDATE_USER.ERROR, error })
    }
}

export default function* saga(){
    yield takeEvery(ADD_USER.ACTION, doAddUser);
    yield takeEvery(GET_USER.ACTION, doGetUser);
    yield takeEvery(DELETE_USER.ACTION, doDeleteUser);
    yield takeEvery(SET_UPDATE_FLAG.ACTION, doSetUpdateFlag);
    yield takeEvery(UPDATE_USER.ACTION, doUpdateUser);
}