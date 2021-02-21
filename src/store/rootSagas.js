import {all} from 'redux-saga/effects'

import {saga as addUserSaga} from '../modules/addUser/store'

export default function* saga() {
    yield all([addUserSaga()]);
}