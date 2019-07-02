import React from 'react';
import { SwitchElement, FileUploadElement, TextInputElement, ButtonElement } from '../inputs'
import { axiosPost } from '../../../functions/api'

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

    onChange = (e) => e.target.name === 'avatar' ? this.setState({avatar: e.target.files[0]}) : this.setState({[e.target.name]: e.target.value});

    onClick = () => {
        let data = new FormData();
        this.state.gender === 'on' ? data.append('gender', 'FEMALE') : data.append('gender', 'MALE');
        data.append('avatar', this.state.avatar);
        data.append('name', this.state.name);
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        axiosPost("http://localhost:3000/users/add", data)
        .then(res =>  res.data.status === 'OK' ? this.props.onAuth(Object.assign(res.data.user, res.data.userData)) : null);
    }

    render = () =>
        (
            <div class="section">
                <div className="row" style={{ textAlign: 'center' }}>
                    <SwitchElement 
                        offLabel='Male' 
                        onLabel='Female' 
                        style={{ width: '100%' }} 
                        name="gender"
                        onChange={this.onChange}   
                    />
                    <TextInputElement 
                        m="8"
                        s="12"
                        offS="0"
                        offM="3"
                        icon='face' 
                        label='Your name' 
                        name="name" 
                        onChange={this.onChange}
                    />
                    <TextInputElement 
                        m="8"
                        s="12"
                        offS="0"
                        offM="3"
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
                        s="12"
                        offS="0"
                        offM="3"
                        icon="lock" 
                        password
                        label="Password"
                        name="password"
                        onChange={this.onChange}
                    />
                    <FileUploadElement
                        m="6"
                        s="12"
                        offS="0"
                        offM="3"
                        text="Profile picture"
                        name="avatar"
                        onChange={this.onChange}
                    />
                    <ButtonElement
                        m="6"
                        s="12"
                        offS="0"
                        offM="3"
                        node="a"
                        waves="teal"
                        large
                        style={{ backgroundColor: '#ee6e73', width: '100%' }}
                        text='SIGN UP'
                        onClick={this.onClick}
                    />
                    <ButtonElement
                        m="6"
                        s="12"
                        offS="0"
                        offM="3"
                        node="a"
                        waves="teal"
                        large
                        style={{ backgroundColor: '#485167', width: '100%' }}
                        onClick={this.props.onFormSwitch}
                        text='Already have an account?'
                    />
                </div>
            </div>
        );
}