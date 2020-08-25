import React from "react";
import { MapStateToPropsType, MapDispatchToPropsType } from "./UsersContainer";
import styles  from "./users.module.css"
import  axios from 'axios'
import userPhoto from "../../assets/images/images.png"


type UsersDataStateType = MapStateToPropsType & MapDispatchToPropsType

export function Users(props:UsersDataStateType) {

   const getUsers = () =>{
       if (props.usersPage.length === 0) {

           axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
               debugger
               props.setUsers(response.data.items)
           })
       }
   }


debugger
    return (
        <div>
            <button onClick={()=> getUsers}>Get Users</button>
            {props.usersPage.map( u => <div key={u.id}>
                <span>
                    <div><img  src={
                        // u.photos.small? u.photos.small:
                            userPhoto } className={styles.userPhoto}/></div>

                    <div>{u.followed?
                        <button onClick={  ()=> {props.unfollow(u.id)}}>Unfollow</button>
                       :<button onClick={  ()=> {props.follow(u.id)}} >Follow</button>}</div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>"u.location.city"</div>
                        <div>"u.location.country"</div>
                    </span>
                </span>
                </div>

            )}
        </div>
    )

}





