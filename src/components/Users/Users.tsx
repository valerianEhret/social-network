import React from "react";
import styles from "./users.module.css"
import userPhoto from "../../assets/images/images.png"
import {UserType} from "../../redux/users-reducer";


type UsersDataStateType = {
    pageSize: number
    totalUsersCount:number
    currentPage:number
    onPageChanged:(p:number)=>void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    usersPage: Array<UserType>
}


export function Users(props: UsersDataStateType) {

    let pagesCount =  Math.ceil(props.totalUsersCount/ props.pageSize)   ;

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{ p }</span>
                })}


            </div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div><img src={
                        // u.photos.small!= null? u.photos.small:
                        userPhoto} className={styles.userPhoto}/></div>

                    <div>{u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}</div>
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





