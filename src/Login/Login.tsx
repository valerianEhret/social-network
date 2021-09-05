import React from 'react';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../redux/auth-reducer";
import {appStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";


export type LoginPropsType = {

}

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}



export const Login: React.FC = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector<appStateType, boolean>(state => state.auth.isAuth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },

        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            } if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 6) {
                errors.password = 'Must be 6 characters or more';
            }
            return errors;
        },

        onSubmit: values => {
            dispatch(loginTC(values.email, values.password, values.rememberMe))
            formik.resetForm();
        }

    });

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Email</label>
                <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps('email')}
                    // name="email"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email?<div style={{color:'red'}}>{formik.errors.email}</div>:null}
            </div>
            <div>
                <label>Password</label>
                <input
                    id="password"
                    type="password"
                    {...formik.getFieldProps('password')}
                    // name="password"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password?<div style={{color:'red'}}>{formik.errors.password}</div>:null}
            </div>
            <div>
                <label>Remember me</label>
                <input
                    id="rememberMe"
                    type="checkbox"

                    {...formik.getFieldProps('rememberMe')}
                    // name="rememberMe"
                    // onChange={formik.handleChange}
                    // checked={formik.values.rememberMe}
                />
            </div>
            <div>
                <button type={'submit'}>login</button>
            </div>
        </form>
    )
}


