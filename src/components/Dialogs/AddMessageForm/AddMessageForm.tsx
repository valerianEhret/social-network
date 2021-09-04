import React from 'react';
import {useFormik} from 'formik';
import {useDispatch} from "react-redux";
import {Textarea} from "../../common/FormsControls/FormsControls";

type AddMessageFormPropsType = {
    buttonTitle: string
    sendMessage: (newMessageBody: string) => { type: string, newMessageBody: string }
}

type FormikErrorType = {
    newMessageBody?: string
}


export const AddMessageForm: React.FC<AddMessageFormPropsType> = (
    {
        buttonTitle,
        sendMessage
    }) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {newMessageBody: ''},
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.newMessageBody) {
                errors.newMessageBody = 'Field is required';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(sendMessage(values.newMessageBody));
            formik.resetForm();
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Textarea
                    placeholder='Enter your message'
                    id={'newMessageBody'}
                    {...formik.getFieldProps('newMessageBody')}
                />
                    {/*<textarea*/}
                    {/*    placeholder='Enter your message'*/}
                    {/*    id={'newMessageBody'}*/}
                    {/*    {...formik.getFieldProps('newMessageBody')}*/}
                    {/*/>*/}
                {formik.touched.newMessageBody &&formik.errors.newMessageBody?<div style={{color:'red'}}>{formik.errors.newMessageBody}</div>:null}
            </div>
            <div>
                <button type={'submit'}>{buttonTitle}</button>
            </div>
        </form>

    )
}