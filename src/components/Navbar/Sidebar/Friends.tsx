import React from "react";
import classes from "./Sidebar.module.css";

type FriendsPropsType = {
    name: string
}

export const Friends = (props: FriendsPropsType) => {
    return (
        <div className={classes.nav}>
            <span className={classes.item}>
                <img src='https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg' />
                <span className={classes.name}>{props.name}</span>
            </span>
        </div>
    )
}