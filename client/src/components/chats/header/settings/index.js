import React from 'react';
import '../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeName, changeAvatar } from '../../../../redux/actions'
import { SideNav, Switch, TextInput, Col, SideNavItem, Button } from 'react-materialize'

class SideBar extends React.Component {
    onUserNameChange () {
        this.props.changeName(this.nameTextField.value);
    }

    render() {
        return (
            <Col m={1} style={{ marginTop: '1.2em' }}>
                <SideNav trigger={<Button icon='menu' />} options={{ closeOnClick: true }}>
                    <SideNavItem userView style={{ backgroundColor: 'teal' }} user={{
                        image: this.props.user.avatar,
                        name: this.props.user.name,
                        email: this.props.user.email
                    }} />
                    <SideNavItem>
                        <Switch offLabel="Light theme" onLabel="Dark theme" />
                    </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>
                        Change password
                    </SideNavItem>
                    <SideNavItem waves>
                        <TextInput password label="Old password" />
                    </SideNavItem><br />
                    <SideNavItem waves>
                        <TextInput password label="New password" />
                    </SideNavItem><br />
                    <SideNavItem waves>
                        <TextInput password label="Repeat new password" />
                    </SideNavItem><br />
                    <SideNavItem waves>
                        <Button className="teal">Submit</Button>
                    </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>
                        Change name
                    </SideNavItem>
                    <SideNavItem waves>
                        <input ref={(el) => this.nameTextField = el} type="text" class="validate" />
                        <label for="first_name">New name</label>
                    </SideNavItem><br />
                    <SideNavItem waves>
                        <Button className="teal" onClick={() => this.onUserNameChange()}>Submit</Button>
                    </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>
                        Change profile picture
                    </SideNavItem>
                    <SideNavItem waves>
                        <Button icon='cloud_upload'></Button>
                    </SideNavItem><br />

                </SideNav>
            </Col>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeName: changeName,
        changeAvatar: changeAvatar
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SideBar);