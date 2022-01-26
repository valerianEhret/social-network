import {usersAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

export type UsersActionsType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>


//state type
type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photos: string
    name: string
    followed: boolean
    status: string

}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

type UsersStateType = typeof initilState


//initial state
let initilState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    // followingInProgress:false,
    followingInProgress: [],
}


//reducer
export const usersReducer = (state: UsersType = initilState, action: UsersActionsType) => {

    switch (action.type) {

        case "FOLLOW":
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        } else return u
                    }
                )
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        } else return u
                    }
                )
            }
        case "SET_USERS":
            return {...state, users: [...action.users]}

        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}

        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}

        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}

        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state
    }
}


//action Creators

export const follow = (userId: number) => ({type: "FOLLOW", userId} as const)

export const unFollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)

export const setUsers = (users: Array<UserType>) => ({type: "SET_USERS", users} as const)

export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const)

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    userId
} as const)


//thunk
export const requestUsers = (page: number, pageSize: number): AppThunkType => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}


export const followThunk = (userId: number): AppThunkType => {

    return (dispatch) => {

        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

export const unfollowThunk = (userId: number): AppThunkType => {

    return (dispatch) => {

        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollow(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}
