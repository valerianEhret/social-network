import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Login } from "./Login/Login";
import NavbarContainer from "./components/Navbar/NavbarContainer";





function App() {
       return (

              <div >
                     <HeaderContainer />
                     <div className="app-wrapper">

                            <NavbarContainer />
                            <div className="app-wrapper-content">
                                   <Route path="/Dialogs"
                                          render={() => <DialogsContainer
                                          />
                                          } />
                                   <Route path="/profile/:userId?"
                                          render={() => <ProfileContainer
                                          />
                                          } />

                                   <Route path="/users"
                                          render={() => <UsersContainer />} />
                                   <Route path="/login"
                                          render={() => <Login />} />
                            </div>

                     </div>

              </div>

       );
}

export default App;
