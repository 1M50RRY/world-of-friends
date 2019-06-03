import React from 'react';
import '../../../../../css/chats.css'
import { SideNavItem, Button } from 'react-materialize'

export const ChangeAvatar = (props) => {
    return (
        <React.Fragment>
            <SideNavItem subheader>
                Change profile picture
            </SideNavItem>
            <SideNavItem waves>
                <Button icon='cloud_upload'></Button>
            </SideNavItem>
            <br />
        </React.Fragment>
    );
}
