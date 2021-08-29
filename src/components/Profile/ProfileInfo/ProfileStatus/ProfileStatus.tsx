import React, {ChangeEvent, useState} from 'react';
import classes from "./ProfileInfo.module.css";

type ProfileStatusType = {
    status: string
    updateStatus:(title:string)=>void
}


class ProfileStatus  extends React.Component<ProfileStatusType>{

    state = {
        editMode:false,
        status: this.props.status
    }


        activateEditMode = ()=> {
        debugger
        this.setState({
            editMode:true
        })
    }


    deactivateEditMode = ()=> {
        this.setState({
            editMode:false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState( {
            status:e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status:this.props.status
            })
        }

        debugger
        let a = this.props;
        let b = this.props;
        console.log('componentDidUpdate')
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
          <div>
              <span onDoubleClick={ this.activateEditMode}>{this.props.status || 'No status'}</span>
           </div>}
       {this.state.editMode &&
           <div>
               <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange}  value={this.state.status }/></div>
           }
       </>
        )
    }
}

export default ProfileStatus;














// import {useDispatch} from "react-redux";
//
//

//
// export const ProfileStatus: React.FC<ProfileStatusType> = (
//     {
//         status,
//         updateStatus
//     }) => {
//
//
//     const dispatch = useDispatch()
//
//     const [editMode, setEditMode] = useState(false)
//     const [title, setTitle] = useState(status)
//
//     const activateEditMode = ()=>{
//         setEditMode(true)
//     }
//
//     const deactivateEditMode = ()=>{
//         setEditMode(false)
//        dispatch(updateStatus(title))
//     }
//
//     const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
//         setTitle(e.currentTarget.value)
//     }
//
//     return (
//         <>
//             {!editMode &&
//             <div>
//                 <span onDoubleClick={ activateEditMode}>{status}</span>
//             </div>
//             }
//             {editMode &&
//             <div>
//                 <input autoFocus={true} onBlur={deactivateEditMode} onChange={changeTitle}  value={title}/>
//             </div>
//             }
//         </>
//
//     )
// }


