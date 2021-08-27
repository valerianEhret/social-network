import React, {ChangeEvent, useState} from 'react';
import classes from "./ProfileInfo.module.css";


type ProfileStatusType = {
    status: string
}


export const ProfileStatus: React.FC<ProfileStatusType> = (
    {
        status
    }) => {

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState('enter your status')

    const activateEditMode = ()=>{
        setEditMode(true)
    }

    const deactivateEditMode = ()=>{
        setEditMode(false)
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={ activateEditMode}>{title}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode}  onChange={changeTitle} value={title}/>
            </div>
            }
        </>

    )
}