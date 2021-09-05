import axios from "axios";

// cоздаем инстанс, который мы будем исполшьзовать вместо axios
const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "39c88548-6df5-43ab-a1ae-8869e921e539"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        debugger
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true}).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    getProfile(userId: number) {
        console.log('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },

}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId:number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:any) {
        return instance.put(`profile/status`, {status})
    }

}


export type  LoginParamsType= {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

type AuthMeType = {
    id:number
    email:string
    login:string
}


export const authAPI = {
    me: ()=> {
        debugger
        return instance.get<ResponseType<AuthMeType>>(`auth/me`);
    },
    login: async (email: string,password: string,rememberMe: boolean) => {
        const response = await instance.post<ResponseType<{userId:number}>>(`auth/login`, {email,password,rememberMe});
        return response.data;
    },
    logout: async () => {
        const response = await instance.delete<ResponseType>(`auth/login`);
        return response.data;
    }
}





