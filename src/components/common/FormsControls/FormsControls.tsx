import React from 'react';
import styles from './FormsControl.module.css'

export const Textarea = (props:any) => {
     return(
        <div className={styles.formControl + '' + styles.error}>
            <textarea {...props}/>
            <span>some error</span>
        </div>
    )
}