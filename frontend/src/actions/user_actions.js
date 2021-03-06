import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER = "RECEIVE_USER"
export const DELETE_USER = "DELETE_USER"
export const REMOVE_PENDING_USER = "REMOVE_PENDING_USER"

export const UPDATE_CURRENT_USER_PENDINGS = "UPDATE_CURRENT_USER_PENDINGS";

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const removeUser = (userId) => ({
    type: DELETE_USER,
    userId
})

export const updateCurrentUserPendings = (pendUserEmail, adminId) => ({
    type: UPDATE_CURRENT_USER_PENDINGS,
    pendUserEmail,
    adminId
})



export const removePendingUser = (pendUser, adminId) => {
    // debugger
    return {
        type: REMOVE_PENDING_USER,
        pendUser,
        adminId
    }
}

export const verifyToken = (token, adminId) => (dispatch) => {
    // debugger
    return (
        UserApiUtil.verifyToken(token)
            .then(
                (pendUser) => dispatch(removePendingUser(pendUser, adminId))
            )
    )
}

export const fetchUsers = () => (dispatch) => (
    UserApiUtil.getUsers()
        .then( 
            users => dispatch(receiveUsers(users)),
        )
)

export const fetchUser = (userId) => (dispatch) => (
    UserApiUtil.getUser(userId)
        .then(
            user => dispatch(receiveUser(user))
        )
)

export const deleteUser = (userId) => (dispatch) => (
    UserApiUtil.deleteUser(userId)
        .then(
            () => dispatch(removeUser(userId))
        )
)

export const updateUser = (data) => (dispatch) => (
    UserApiUtil.updateUser(data)
        .then(
            (user) => dispatch(receiveUser(user))
        )
)