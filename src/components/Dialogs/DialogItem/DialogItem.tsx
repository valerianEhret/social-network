import React from 'react';
import classes from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {dialogsDataType} from "../../../redux/dialogs-reducer";





export const Dialogitem =(props:dialogsDataType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


