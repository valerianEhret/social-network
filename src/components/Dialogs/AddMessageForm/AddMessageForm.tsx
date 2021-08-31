import React from 'react';
import {useFormik} from 'formik';
import {useDispatch} from "react-redux";

type AddMessageFormPropsType = {
    buttonTitle: string
    sendMessage: (newMessageBody: string) => { type: string, newMessageBody: string }
}


export const AddMessageForm: React.FC<AddMessageFormPropsType> = (
    {
        buttonTitle,
        sendMessage
    }) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {newMessageBody: ''},
        onSubmit: values => {
            dispatch(sendMessage(values.newMessageBody));
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
                <button type={'submit'}>{buttonTitle}</button>
            </div>
        </form>

    )
}