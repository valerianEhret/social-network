import React from "react";
import { MapStateToPropsType, MapDispatchToPropsType } from "./UsersContainer";



type UsersDataStateType = MapStateToPropsType & MapDispatchToPropsType

export function Users(props:UsersDataStateType) {
    return (
        <div>
            {props.usersPage.map( u => <div key={u.id}>
                <span>
                    <div><img  src={u.photoUrl}/></div>
                    <div><button>follw</button></div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
                </div>

            )}
        </div>
    )

}





