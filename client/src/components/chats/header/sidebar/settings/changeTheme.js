import React from 'react';
import '../../../../../css/chats.css'
import { SideNavItem, Switch } from 'react-materialize'

export const ChangePassword = (props) => {
    return (
        <React.Fragment>
            <SideNavItem>
                <Switch offLabel="Light theme" onLabel="Dark theme" />
            </SideNavItem>
            <SideNavItem divider />
        </React.Fragment>
    );
}
