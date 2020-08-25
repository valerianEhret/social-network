import React from "react";
import userPhoto from "../../assets/images/images.png";
import styles from "./users.module.css";
import axios from "axios";
import {UsersDataStateType} from "./Users";

class Users extends React.Component<UsersDataStateType>{

    constructor(props:any) {
        super(props);
           alert("new")
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                this.props.setUsers(response.data.items)
            })
    }



    getUsers = () =>{


    }


    render() {
        return <div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {this.props.usersPage.map( u => <div key={u.id}>
                <span>
                    <div><img  src={
                        // u.photos.small? u.photos.small:
                        userPhoto } className={styles.userPhoto}/></div>

                    <div>{u.followed?
                        <button onClick={  ()=> {this.props.unfollow(u.id)}}>Unfollow</button>
                        :<button onClick={  ()=> {this.props.follow(u.id)}} >Follow</button>}</div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>"u.location.city"</div>
                        <div>"u.location.country"</div>
                    </span>
                </span>
                    </div>

                )}
            </div>

    }
}

export default Users;
