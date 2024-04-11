import {useState} from 'react';
// import './LoginPage.module.css';
import s from './LoginPage.module.css'
import {Input} from '../../common/fields';
import {Button} from "../../common/buttons";

const validateIsEmpty = (value: string) => {
    if (!value) return 'field required'
    return null
}
const validateUsername = (value: string) => {
    return validateIsEmpty(value)
}

const validatePassword = (value: string) => {
    return validateIsEmpty(value)
}

const loginFormValidateSchema = {
    username: validateUsername,
    password: validatePassword
}
const validateLoginForm =(name: keyof typeof loginFormValidateSchema, value: string) => {
    return loginFormValidateSchema[name](value)
}

type FormErrors = {
    username: string | null
    password: string | null
}

export const LoginPage = () => {
    const [formValues, setFormValues] = useState({username: '', password: ''});
    const [formErrors, setFormErrors] = useState<FormErrors>({username: null, password: null});
    return (
        <div className={s.page}>
            <div className={s.container}>
                <div className={s.container_header}>Doggee</div>
                <div className={s.form_container}>

                    <div className={s.input_container}>
                        <Input value={formValues.username}
                               placeholder={'username'}
                               onChange={(event) => {
                                   const username = event.currentTarget.value;
                                   setFormValues({...formValues, username})
                                   const error = validateLoginForm('username', username);
                                   setFormErrors({...formErrors, username: error})
                               }}
                               {...(!!formErrors.username && {
                                   isError: !!formErrors.username,
                                   helperText: formErrors.username
                               })}
                        />

                    </div>

                    <div className={s.input_container}>
                        <Input value={formValues.password}
                               placeholder={'password'}
                               isError={!!formErrors['password']}
                               onChange={(event) => {
                                   const password = event.currentTarget.value
                                   setFormValues({...formValues, password})
                                   const error = validateLoginForm('password', password);
                                   setFormErrors({...formErrors, password: error})

                               }}
                               {...(!!formErrors.password && {
                                   isError: !!formErrors.password,
                                   helperText: formErrors.password
                               })}
                        />
                    </div>

                    <div>
                        <Button>sign in</Button>
                    </div>

                </div>
                <div className={s.sign_up_container}>Create new account</div>
            </div>
        </div>
    );
};