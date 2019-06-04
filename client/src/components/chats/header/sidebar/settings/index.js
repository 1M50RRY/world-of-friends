import React from 'react';
import '../../../../../css/chats.css'
import { ChangeAvatar } from './changeAvatar'
import { ChangeName } from './changeName'
import { ChangePassword } from './changePassword'
import { ChangeTheme } from './changeTheme'

export const Settings = (props) => {
    return (
        <React.Fragment>
            <ChangeTheme onThemeChange={props.onThemeChange} />
            <ChangePassword generateColor={props.generateColor} />
            <ChangeName onUserNameChange={props.onUserNameChange} generateColor={props.generateColor} />
            <ChangeAvatar />
        </React.Fragment>
    );
}

