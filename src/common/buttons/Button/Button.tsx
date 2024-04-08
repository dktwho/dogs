import React from 'react';
import s from './Button.module.css'
interface ButtonPropsType extends React.HTMLProps<HTMLButtonElement> {

}

export const Button: React.FC<ButtonPropsType> = ({ children }) => {
    return (
        <button className={s.button}>
            {children}
        </button>
    );
};