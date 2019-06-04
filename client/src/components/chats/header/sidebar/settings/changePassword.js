import React from 'react';
import '../../../../../css/chats.css'
import { SideNavItem, Button, TextInput } from 'react-materialize'

export const ChangePassword = (props) => {
    return (
        <React.Fragment>
            <SideNavItem subheader>
                Change password
            </SideNavItem>
            <SideNavItem waves>
                <TextInput password label="Old password" style={props.generateColor('transparent', 'transparent', 'white', 'black')} />
            </SideNavItem> <br />
            <SideNavItem waves>
                <TextInput password label="New password" style={props.generateColor('transparent', 'transparent', 'white', 'black')} />
            </SideNavItem> <br />
            <SideNavItem waves>
                <TextInput password label="Repeat new password"style={props.generateColor('transparent', 'transparent', 'white', 'black')} />
            </SideNavItem> <br />
            <SideNavItem waves>
                <Button className="teal">Submit</Button>
            </SideNavItem>
            <SideNavItem divider />
        </React.Fragment>
    );
}
