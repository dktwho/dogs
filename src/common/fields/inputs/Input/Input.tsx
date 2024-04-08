import React from 'react';
import  s from './Input.module.css';

type InputPropsType = React.HTMLProps<HTMLInputElement> & {
    isError?: boolean;
    helperText?: string;
};

export const Input: React.FC<InputPropsType> = ({ isError = false, helperText, ...props }) => {
    return (
        <>
            <input className={`${s.input} ${isError ? s.error : ''}`} {...props} />
            {isError && helperText && <div className={s.helper_text}>{helperText}</div>}
        </>

    );
};
