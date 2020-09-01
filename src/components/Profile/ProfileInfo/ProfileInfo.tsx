import React from 'react';
import classes from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloader";

type ProfileInfoType = {
    profile:any
}



export const ProfileInfo = (props:ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://www.ecos-office.com/fileadmin/_processed_/5/4/csm_Bielefeld_Kernkompetenz_1_b98104209a.jpg"
                    alt="photo of city"/>
            </div>
            <div className={classes.photo}>
                <img  src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt="avatar"/>
                <img src={props.profile.photos.large}/>
                <div>Полное имя: {props.profile.fullName} </div>
                <div>О себе: {props.profile.aboutMe} </div>
            </div>
        </div>

    )
}