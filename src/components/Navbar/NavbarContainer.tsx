import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {SidebarType} from "../../redux/sidebar-reducer";
import {appStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    state: SidebarType
}

export type SidebarPropsType = mapStateToPropsType

const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        state: state.sidebar
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;