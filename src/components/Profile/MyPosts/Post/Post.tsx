import React from 'react';
import classes from './Post.module.css';

type PropsType = {
    message: string
}

const Post = (props: PropsType) => {
  return (
    <div className={classes.item}>
      <img src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg" alt="" />
      {props.message}


    </div>
  )
}
export default Post;