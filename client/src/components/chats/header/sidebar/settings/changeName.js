import React from 'react';
import '../../../../../css/chats.css'
import { SideNavItem, Button } from 'react-materialize'

export class ChangeName extends React.Component {

    render () {
        return (
            <React.Fragment>
                <SideNavItem subheader>
                    Change name
                </SideNavItem>
                <SideNavItem waves>
                    <input 
                        ref={(el) => this.nameTextField = el} 
                        type="text" 
                        class="validate" 
                        style={this.props.generateColor('transparent', 'transparent', 'white', 'black')}
                    />
                    <label for="first_name">New name</label>
                </SideNavItem><br />
                <SideNavItem waves>
                    <Button className="teal" onClick={() => this.props.onUserNameChange(this.nameTextField.value)}>Submit</Button>
                </SideNavItem>
                <SideNavItem divider />
            </React.Fragment>
        );
    }
    
}
