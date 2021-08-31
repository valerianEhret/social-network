import React from 'react';
import {useFormik} from 'formik';
import {useDispatch} from "react-redux";
import {sendMessageAC} from "../../../redux/dialogs-reducer";




export const AddMessageForm: React.FC= () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {newMessageBody: ''},
        onSubmit: values => {
            dispatch(sendMessageAC(values.newMessageBody));
            formik.resetForm();
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
                <button type={'submit'}>Send</button>
            </div>
        </form>

    )
}