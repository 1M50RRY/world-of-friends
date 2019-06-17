import React from 'react';
import { SideNavItem, Button, TextInput } from 'react-materialize'

export const ChangePassword = ({generateColor}) => {
    return (
        <React.Fragment>
            <SideNavItem subheader>
                Change password
            </SideNavItem>
            <SideNavItem waves>
                <TextInput password label="Old password" style={generateColor('transparent', 'transparent', 'white', 'black')} />
            </SideNavItem> <br />
            <SideNavItem waves>
                <TextInput password label="New password" style={generateColor('transparent', 'transparent', 'white', 'black')} />
            </SideNavItem> <br />
            <SideNavItem waves>
                <TextInput password label="Repeat new password"style={generateColor('transparent', 'transparent', 'white', 'black')} />
            </SideNavItem> <br />
            <SideNavItem waves>
                <Button className="teal">Submit</Button>
            </SideNavItem>
            <SideNavItem divider />
        </React.Fragment>
    );
}
