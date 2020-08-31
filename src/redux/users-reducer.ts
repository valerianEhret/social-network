
//types

//action types
type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>


//state type
type LocationType = {
    city:string
    country:string
}

export type UserType = {
    id:number
    photos:string
    name:string
    followed:boolean
    status:string

}

export type UsersType = {
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}

type UsersStateType = typeof initilState




//action Creators

export const followAC = (userId:number) => ({type: "FOLLOW", userId} as const)

export const unFollowAC = (userId:number) => ({type: "UNFOLLOW", userId} as const)

export const setUserAC = (users:Array<UserType>) => ({type: "SET_USERS", users} as const)

export const setCurrentPageAC = (currentPage:number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)

export const setTotalUsersCountAC = (totalUsersCount:number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount} as const)

export const toggleIsFetchingAC = (isFetching:boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const)


//initial state

let initilState: UsersType = {
    users: [],
    pageSize:5,
    totalUsersCount: 0,
    currentPage:1,
    isFetching:false
}



//reducer

export const usersReducer = (state: UsersType = initilState, action: ActionsType) => {

    switch (action.type) {

        case "FOLLOW":
            return  {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        else return u
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

        default:
            return state
    }
}