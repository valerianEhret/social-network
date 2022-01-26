import React, {useEffect} from "react";
import styles from "./users.module.css"
import userPhoto from "../../assets/images/images.png"
import {followThunk, requestUsers, unfollowThunk, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Pagination} from "../Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

type UsersDataStateType = {

}

export const Users: React.FC<UsersDataStateType> = ({}) => {


    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsers)
    const followingInProgress = useSelector(getFollowingInProgress)

    useEffect(()=>{
        dispatch(requestUsers(currentPage,pageSize ))
    },[])

    const dispatch = useDispatch()


    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const onPageChanged = (pageNumber: number) => {

        dispatch(requestUsers(pageNumber,pageSize ))
    }


    const follow = (userId:number) => {
        dispatch(followThunk(userId))
    }

    const unfollow = (userId:number) => {
        dispatch(unfollowThunk(userId))
    }


    return (
        <>
            <Pagination
                onPageChange={onPageChanged}
                currentPage={currentPage}
                portionSize={5}
                pagesCount={pagesCount}/>
            {users.map(u => <div key={u.id}>
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
