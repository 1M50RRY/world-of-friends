import React from 'react';
import '../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    SideNav, Select, Textarea, Modal, Switch, Chip, CollectionItem, Icon, Collection,
    TextInput, NavItem, Navbar, Col, SideNavItem, Button, Row
} from 'react-materialize'

const SideBar = (props) => {
    return (
        <Col m={1} style={{ marginTop: '1.2em' }}>
                <SideNav trigger={<Button icon='menu' />} options={{ closeOnClick: true }}>
                    <SideNavItem userView style={{backgroundColor: 'teal'}} user={{
                        image: 'https://materializecss.com/images/yuna.jpg',
                        name: 'John Doe',
                        email: 'example@gmail.com'
                    }} />
                    <SideNavItem href="#!icon" >
                        <Switch offLabel="Light theme" onLabel="Dark theme" />
                    </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>
                        Change password
                            </SideNavItem>
                    <SideNavItem waves href="#!third">
                        <TextInput password label="Old password" />
                    </SideNavItem><br />
                    <SideNavItem waves href="#!third">
                        <TextInput password label="New password" />
                    </SideNavItem><br />
                    <SideNavItem waves href="#!third">
                        <TextInput password label="Repeat new password" />
                    </SideNavItem><br />
                    <SideNavItem waves href="#!third">
                        <Button className="teal">Submit</Button>
                    </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>
                        Change name
                            </SideNavItem>
                    <SideNavItem waves href="#!third">
                        <TextInput password label="New name" />
                    </SideNavItem><br />
                    <SideNavItem waves href="#!third">
                        <Button className="teal">Submit</Button>
                    </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>
                        Change profile picture
                            </SideNavItem>
                    <SideNavItem waves href="#!third">
                        <Button icon='cloud_upload'></Button>
                    </SideNavItem><br />

                </SideNav>
            </Col>
    );
}

export default SideBar;