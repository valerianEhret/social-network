import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialogitem} from "./DialogItem/DialogItem";
import {MapDispatchToPropsType, MapStateToPropsType} from "./DialogsContainer";
import { Redirect } from 'react-router-dom';
import {Field, Formik, useFormik} from 'formik';
import {loginTC} from "../../redux/auth-reducer";


type DialogDataStateType = MapStateToPropsType & MapDispatchToPropsType



const Dialogs = (props:DialogDataStateType) => {


    let dialogsElements = props.dialogsPage.map( d => <Dialogitem name={d.name} id={d.id}/>   );

    let messagesElements = props.messagesPage.map(m =>  <Message message={m.message} id={m.id}/> )


    const onSendMessageClick =() => {
        props.sendMessage()
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    const addNewMessage = (values:{newMessageBody:string}) => {
        console.log(values.newMessageBody)
    }



   // if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm />
                    {/*<div><textarea*/}
                    {/*    value={props.newMessageBody}*/}
                    {/*    placeholder="Enter your message"*/}
                    {/*    onChange={onNewMessageChange}*/}
                    {/*/>*/}
                    {/*</div>*/}
                    {/*<div><button onClick={ onSendMessageClick}>Send</button></div>*/}
                </div>
            </div>
        </div>
    )
}
export default Dialogs



type AddMessageFormPropsType = {

}


export const AddMessageForm: React.FC<AddMessageFormPropsType> = () => {
    const formik = useFormik({
        initialValues: {newMessageBody: ''},
        onSubmit: values => {
            alert(JSON.stringify(values.newMessageBody));
        }
    });

    return (

        <form onSubmit={formik.handleSubmit}>
            <div>
                    <textarea
                        placeholder='Enter your message'
                        id={'newMessageBody'}
                        {...formik.getFieldProps('newMessageBody')}
                    />
            </div>
            <div>
                <button type={'submit'} >Send</button>
            </div>
        </form>

    )
}