import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <main className={classes.item}>
      <div>
        <img src="https://www.ecos-office.com/fileadmin/_processed_/5/4/csm_Bielefeld_Kernkompetenz_1_b98104209a.jpg" alt="photo of city" />
      </div>
      <div>
        <img src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt="avatar" />
      </div>
      <div className="posts">
        My posts
      <div>
          New posts
      </div>
        <div className={classes.posts}>post1</div>
        <div className={classes.item}>post2</div>
      </div>
    </main>
  )
}
export default Profile;