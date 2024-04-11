import {useState} from 'react';
// import './LoginPage.module.css';
import s from './LoginPage.module.css'
import {Input} from '../../common/fields';
import {Button} from "../../common/buttons";

const validateUsername = (value: string) => {
    if (!value) return 'field required'
    return null
}

const validatePassword = (value: string) => {
    if (!value) return 'field required'
    return null
}

export const LoginPage = () => {
    const [formValues, setFormValues] = useState({username: '', password: ''});
    const [formErrors, setFormErrors] = useState<{ [key: string]: string | null }>({username: null, password: null});
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
                                   const error = validateUsername(username);
                                   setFormErrors({...formErrors, username: error})
                               }}
                               {...(!!formErrors['username'] && {
                                   isError: !!formErrors['username'],
                                   helperText: formErrors['username']
                               })}
                        />

                    </div>

                    <div className={s.input_container}>
                        <Input value={formValues.password} placeholder={'password'} isError={!!formErrors['password']}
                               onChange={(event) => setFormValues({
                                   ...formValues,
                                   password: event.currentTarget.value
                               })}/>
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