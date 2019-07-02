import React from 'react';
import { TextInputElement, ButtonElement } from '../inputs'
import { axiosPost } from '../../../functions/api'

export class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onClick = () => {
        axiosPost("http://localhost:3000/users/login", this.state)
        .then(res => 
            res.data.status === 'OK' ? 
            this.props.onAuth(Object.assign(res.data.user, res.data.userData)) 
            : 
            null
        );
    }

    render = () =>
        (
            <div class="section">
                <div className="row" style={{ textAlign: 'center' }}>
                    <TextInputElement
                        m="8"
                        s="12"
                        offS="0"
                        offM="3"
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
                        s="12"
                        offS="0"
                        offM="3"
                        icon="lock"
                        password
                        label="Password"
                        name="password"
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
                        text='Sign In'
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
                        text="Doesn't have an account?"
                    />
                </div>
            </div>
        );
}