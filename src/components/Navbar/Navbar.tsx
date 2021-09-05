import React from 'react';
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {SidebarPropsType} from "./NavbarContainer";
import {Friends} from "./Sidebar/Friends";

const Navbar = (props: SidebarPropsType) => {

    let myFriends = props.state.friends.map(f => <Friends key={f.id} name={f.name}/>)

  return (
    <nav className={classes.nav}>
      <div className={classes.item}><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></div>
      <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink></div>
      <div className={classes.item}><NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink></div>
        <div className={classes.item}><NavLink to="/login" activeClassName={classes.activeLink}>Login</NavLink></div>
      <div className={classes.item}><NavLink to="#">News</NavLink></div>
      <div className={classes.item}><NavLink to="#">Music</NavLink></div>
      <div className={classes.item}><NavLink to="#">Settings</NavLink></div>
        <div className={classes.friends}>Friends</div>
        {myFriends}
    </nav>
  )
}
export default Navbar;