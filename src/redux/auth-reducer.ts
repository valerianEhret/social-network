
//types

//action types

type ActionsType =
    | ReturnType<typeof setAutUserData>



//state type


export type DataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth:boolean
}





//action Creators

export const setAutUserData = (id:number | null, login: string | null, email:string | null) => ({type: "SET_USER_DATA", data:{id, login, email} } as const)




//initial state

let initilState: DataType = {
    id: null,
    login: null,
    email: null,
    isAuth:false
}



//reducer

export const authReducer = (state: DataType = initilState, action: ActionsType) => {

    switch (action.type) {

        case "SET_USER_DATA":
            return  {
                ...state, ...action.data
            }

        default:
            return state
    }
}
