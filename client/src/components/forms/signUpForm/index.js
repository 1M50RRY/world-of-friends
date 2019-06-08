import React from 'react';
import axios from 'axios';
import { SwitchElement, FileUploadElement, TextInputElement, ButtonElement } from '../inputs'
axios.defaults.withCredentials = true;

export default class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gender: '',
            name: '',
            email: '',
            password: '',
            avatar: null
        };
    }

    onChange = (e) => {
        if (e.target.name === 'avatar') this.setState({avatar: e.target.files[0]});
        else this.setState({[e.target.name]: e.target.value});
    }

    onClick = () => {
        let data = new FormData();
        data.append('avatar', this.state.avatar);
        data.append('name', this.state.name);
        if (this.state.gender === 'on') data.append('gender', 'FEMALE');
        else data.append('gender', 'MALE');
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        axios.post("http://localhost:3000/users/add", data, { headers: { "Access-Control-Allow-Origin": "*", } })
        .then(res => { 
            if (res.data.status === 'OK') this.props.onAuth(Object.assign(res.data.user, res.data.userData));
        });
    }

    render() {
        return (
            <div class="section">
                <div className="row" style={{ textAlign: 'center' }}>
                    <SwitchElement 
                        offLabel='Male' 
                        onLabel='Female' 
                        style={{ width: '100%' }} 
                        name="gender"
                        onChange={this.onChange}   
                    />
                    <TextInputElement m='8' 
                        icon='face' 
                        label='Your name' 
                        name="name" 
                        onChange={this.onChange}
                    />
                    <TextInputElement m='8'
                        icon='email'
                        label='Email'
                        email
                        validate
                        error="Wrong format"
                        success="Nice!"
                        name="email"
                        onChange={this.onChange}
                    />
                    <TextInputElement
                        m="8"
                        icon="lock"
                        password
                        label="Password"
                        name="password"
                        onChange={this.onChange}
                    />
                    <FileUploadElement
                        text="Profile picture"
                        name="avatar"
                        onChange={this.onChange}
                    />
                    <ButtonElement
                        m="8"
                        node="a"
                        waves="teal"
                        large
                        style={{ backgroundColor: '#ee6e73', width: '100%' }}
                        text='SIGN UP'
                        onClick={this.onClick}
                    />
                    <ButtonElement
                        m="8"
                        node="a"
                        waves="teal"
                        large
                        style={{ backgroundColor: '#485167', width: '100%' }}
                        onClick={this.props.onFormSwitch}
                        text='Already have an account? Sign in'
                    />
                </div>
            </div>
        );
    }
}