import {defineAction} from "redux-define"

const NAMESPACE = "USER_DETAILS"

export const ADD_USER = defineAction("ADD_USER", ["SUCCESS", "ERROR", "PENDING"], NAMESPACE );

export const GET_USER = defineAction("GET_USER", ["SUCCESS", "ERROR", "PENDING"], NAMESPACE );

export const DELETE_USER = defineAction("DELETE_USER", ["SUCCESS", "ERROR", "PENDING"], NAMESPACE );

export const UPDATE_USER = defineAction("UPDATE_USER", ["SUCCESS", "ERROR", "PENDING"], NAMESPACE );

export const SET_UPDATE_FLAG = defineAction("SET_UPDATE_FLAG", ["SUCCESS", "ERROR", "PENDING"], NAMESPACE );


