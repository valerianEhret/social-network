import axios from "axios";
import {setUserProfile} from "../redux/profile-reducer";


// cоздаем инстанс, который мы будем исполшьзовать вместо axios
const instance = axios.create({
withCredentials:true,
    headers:{
        "API-KEY":"39c88548-6df5-43ab-a1ae-8869e921e539"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage:number,pageSize:number) {
        debugger
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials:true}).then(response => response.data)
    },
    unfollow(userId:number) {
     return  instance.delete(`follow/${userId}`)
    },
    follow(userId:number ) {
       return  instance.post(`follow/${userId}`,{})
    },
    getProfile(userId:number) {
        debugger
      return   instance.get(`profile/${userId}`)
    },

}


export const authAPI = {
me() {
   return  instance.get(`auth/me`)
},
}


// export const getUsers = (currentPage:number,pageSize:number ) => {
//     debugger
//     return instance.get(baseURL+`users?page=${currentPage}&count=${pageSize}`,
//         {withCredentials:true}).then(response => response.data)
// }





