import React from 'react';
import { TextInputElement, ButtonElement } from './inputs'

export const SignInForm = (props) => {
    return (
        <div class="section">
            <div className="row" style={{textAlign:'center'}}>
                <TextInputElement
                    m="8"
                    icon="email"
                    email
                    validate
                    label="Email"
                    error="Wrong format"
                    success="Nice!"
                />
                <TextInputElement 
                    m="8" 
                    icon="lock" 
                    password 
                    label="Password" 
                />
                <ButtonElement
                    m="8"
                    node="a"
                    waves="teal"
                    large
                    style={{backgroundColor: '#ee6e73', width: '100%'}}
                    text='Sign In'
                />
                <ButtonElement
                    m="8"
                    node="a"
                    waves="teal"
                    large
                    style={{backgroundColor: '#485167', width: '100%'}}
                    onClick={props.onFormSwitch}
                    text="Doesn't have an account? Sign up"
                />
            </div>
        </div>
    );
}