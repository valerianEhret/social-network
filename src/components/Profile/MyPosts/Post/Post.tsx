import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={classes.item}>

        My posts
      <div>
          New posts
      </div>
        <div className={classes.posts}>post1</div>
        <div className={classes.item}>post2</div>
      </div>
  )
}
export default MyPosts;