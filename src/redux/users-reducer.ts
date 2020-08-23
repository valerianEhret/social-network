
//types

//action types
type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUserAC>

//state type
type LocationType = {
    city:string
    country:string
}

export type UsersType = {
    id:number
    photoUrl:string
    fullName:string
    followed:boolean
    status:string
    location:LocationType
}

type UsersStateType = typeof initilState




//action Creators

export const followAC = (userId:number) => ({type: "FOLLOW", userId} as const)

export const unFollowAC = (userId:number) => ({type: "UNFOLLOW", userId} as const)

export const setUserAC = (users:Array<UsersType>) => ({type: "SET_USERS", users} as const)


//initial state

let initilState = {
    users: [
        {id: 1, photoUrl:"https://sun6-13.userapi.com/c856032/v856032846/2338d2/nGwJCQbRMQs.jpg",  fullName: "Valerian Ehret", followed:true, status: "first?", location: {city:"Bielefeld", country:"Germany"}},
        {id: 2, photoUrl:"https://sun6-13.userapi.com/c856032/v856032846/2338d2/nGwJCQbRMQs.jpg",  fullName: "Natalie Ehret", followed:false, status: "Hi, How are you?", location: {city:"Bielefeld", country:"Belarus"}},
        {id: 3, photoUrl:"https://sun6-13.userapi.com/c856032/v856032846/2338d2/nGwJCQbRMQs.jpg",  fullName: "Mark Ehret", followed:false, status: "H333333?", location: {city:"Seatle", country:"USA"}},
        {id: 3, photoUrl:"https://sun6-13.userapi.com/c856032/v856032846/2338d2/nGwJCQbRMQs.jpg",  fullName: "Zoe Ehret", followed:true, status: "H44444?", location: {city:"Milano", country:"Italy"}},
    ] as Array<UsersType>,
}



//reducer

export const usersReducer = (state: UsersStateType = initilState, action: ActionsType) => {

    switch (action.type) {

        case "FOLLOW":
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
            }

        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }
        case "SET_USERS":
            return {...state, users:[...state.users, ...action.users]}
        default:
            return state
    }
}