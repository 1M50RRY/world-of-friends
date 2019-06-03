import React from 'react';
import '../../../../css/chats.css'
import { SideNav, Col, SideNavItem, Button } from 'react-materialize'
import { Settings } from './settings'

export default class SideBar extends React.Component {
    render() {
        return (
            <Col m={1} style={{ marginTop: '1.2em' }}>
                <SideNav trigger={<Button icon='menu' />} options={{ closeOnClick: true }}>
                    <SideNavItem userView style={{ backgroundColor: 'teal' }} user={{
                        image: this.props.user.avatar,
                        name: this.props.user.name,
                        email: this.props.user.email
                    }} />
                    <Settings onUserNameChange={this.props.onUserNameChange} onThemeChange={this.props.onThemeChange} />
                </SideNav>
            </Col>
        );
    }
}