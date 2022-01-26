import React from "react";
import {useSelector} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {getIsFetching} from "../../redux/users-selectors";

type UsersPagePropsType = {
    pageTitle:string
}

export const UsersContainer: React.FC<UsersPagePropsType> = ({pageTitle}) => {

    const isFetching = useSelector(getIsFetching)

    return (
        <>
            <h2>{pageTitle}</h2>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </>
    )
}

