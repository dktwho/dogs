import {useState} from 'react';
import './LoginPage.css';
import {Input} from '../../common/fields';
import {Button} from '../../common/buttons';


export const LoginPage = () => {
    const [formValues, setFormValues] = useState({username: '', password: ''});
    return (
        <div className='loginPage'>
            <div className='loginPage_container'>
                <div>header</div>
                <div className='loginPage_form_container'>


                    <div className='loginPage_input_container'>
                        <Input value={formValues.username} placeholder={'username'} isError={true}
                               helperText={'validation'}
                               onChange={(event) => setFormValues({
                                   ...formValues,
                                   username: event.currentTarget.value
                               })}/>

                    </div>

                    <div className='loginPage_input_container'>
                        <Input value={formValues.password} placeholder={'password'}
                               onChange={(event) => setFormValues({
                                   ...formValues,
                                   password: event.currentTarget.value
                               })}/>
                    </div>

                    <div>
                        <Button>sign in</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};