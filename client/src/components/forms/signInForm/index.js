import React from 'react';
import axios from 'axios';
import { TextInputElement, ButtonElement } from '../inputs'
axios.defaults.withCredentials = true;

export class SignInForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onClick = () => {
        axios.post("http://localhost:3000/users/login", this.state, { headers: { "Access-Control-Allow-Origin": "*", } })
        .then(res => { 
            if (res.data.status === 'OK'){
                let user = Object.assign(res.data.user, res.data.userData);
                this.props.onAuth(user);
            } 
        });
    }

    render() {
        return (
            <div class="section">
                <div className="row" style={{ textAlign: 'center' }}>
                    <TextInputElement
                        m="8"
                        icon="email"
                        email
                        validate
                        label="Email"
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
                    <ButtonElement
                        m="8"
                        node="a"
                        waves="teal"
                        large
                        style={{ backgroundColor: '#ee6e73', width: '100%' }}
                        text='Sign In'
                        onClick={this.onClick}
                    />
                    <ButtonElement
                        m="8"
                        node="a"
                        waves="teal"
                        large
                        style={{ backgroundColor: '#485167', width: '100%' }}
                        onClick={this.props.onFormSwitch}
                        text="Doesn't have an account? Sign up"
                    />
                </div>
            </div>
        );
    }
}