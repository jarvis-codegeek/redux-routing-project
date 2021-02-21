const NAME= "USER_DETAILS"

const getUserList = (state) => {
    return state[NAME]['total_user_data']
}

const getExistingData = (state) => {
    return state[NAME]['existing_data']
}

const getUpdateFlag = (state) => {
    return state[NAME]['update_flag']
} 

export {
    getUserList,
    getExistingData,
    getUpdateFlag
}