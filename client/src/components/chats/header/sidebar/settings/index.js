import React from 'react';
import '../../../../../css/chats.css'
import { ChangeAvatar } from './changeAvatar'
import { ChangeName } from './changeName'
import { ChangePassword } from './changePassword'

export class Settings extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ChangePassword />
                <ChangeName onUserNameChange={this.props.onUserNameChange} />
                <ChangeAvatar />
            </React.Fragment>

        );
    }

}