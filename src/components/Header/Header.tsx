import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    isAuth:boolean
    login:string | null
    logout:()=>void
}

const Header = (props:HeaderPropsType ) => {
  return (
    <header className= {classes.header}>
      {/*<img src="https://i0.wp.com/tis39.ru/wp-content/uploads/2016/08/cropped-logo-tis_dolphin-and-starfish_-%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0-%D0%B1%D0%B5%D0%B7-%D1%84%D0%BE%D0%BD%D0%B0.png?fit=1024%2C956" alt="picture" />*/}
      <div className={classes.loginBlock}>
          {props.isAuth? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>  : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  )
}
export default Header;