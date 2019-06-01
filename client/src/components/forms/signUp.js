import React from 'react';
import { SwitchElement, FileUploadElement, TextInputElement, ButtonElement } from './inputs'

export default function SignUpForm (props) {
    return (
        <div class="section">
            <div className="row" style={{textAlign:'center'}}>
                <SwitchElement offLabel='Male' onLabel='Female' style={{width: '100%'}}/>
                <TextInputElement m='8' icon='face' label='Your name' />
                <TextInputElement m='8' 
                    icon='email' 
                    label='Email' 
                    email 
                    validate 
                    error="Wrong format" 
                    success="Nice!" 
                />
                <TextInputElement 
                    m="8" 
                    icon="lock" 
                    password 
                    label="Password" 
                />
                <FileUploadElement 
                    text="Profile picture"
                />
                <ButtonElement 
                    m="8"
                    node="a"
                    waves="teal"
                    large
                    style={{backgroundColor: '#ee6e73', width: '100%'}}
                    text='SIGN UP'
                />
                <ButtonElement 
                    m="8"
                    node="a"
                    waves="teal"
                    large
                    style={{backgroundColor: '#485167', width: '100%'}}
                    onClick={props.onFormSwitch}
                    text='Already have an account? Sign in'
                />
            </div>
        </div>
    );
}