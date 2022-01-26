import React from "react";
import styles from "./users.module.css"
import userPhoto from "../../assets/images/images.png"
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Pagination} from "../Pagination/Pagination";

type UsersDataStateType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    usersPage: Array<UserType>
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: any[]
}

export const Users: React.FC<UsersDataStateType> = ({
                                                        currentPage,
                                                        totalUsersCount,
                                                        usersPage,
                                                        followingInProgress,
                                                        unfollow,
                                                        follow,
                                                        onPageChanged,
                                                        pageSize
                                                    }) => {


    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    return (
        <>
            <Pagination
                onPageChange={onPageChanged}
                currentPage={currentPage}
                portionSize={5}
                pagesCount={pagesCount}/>
            {usersPage.map(u => <div key={u.id}>
                <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={
                                // u.photos.small!= null? u.photos.small:
                                userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                            </div>
                    <div>{u.followed ?
                        <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            unfollow(u.id)
                        }}>
                            Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            follow(u.id)
                        }}>
                            Follow</button>}</div>
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
        </>
    )
}
