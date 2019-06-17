import React from 'react';
import { SideNav, Col, SideNavItem, Button } from 'react-materialize'
import { Settings } from './settings'

export default class SideBar extends React.Component {
    render = () =>
        (
            <Col m={1} style={{ marginTop: '1.2em' }}>
                <SideNav 
                    trigger={<Button icon='menu' style={{backgroundColor: 'transparent', WebkitBoxShadow: 'none', boxShadow: 'none'}}/>} 
                    options={{ closeOnClick: true }} 
                    style={this.props.generateColor('#37474f', 'white', 'white', 'black')}
                >
                    <SideNavItem userView style={this.props.generateColor('#607d8b', 'teal', 'white', 'white')} 
                    user={{
                        image: this.props.user.avatar,
                        name: this.props.user.name,
                        email: this.props.user.email
                    }} />
                    <Settings 
                        onUserNameChange={this.props.onUserNameChange} 
                        onThemeChange={this.props.onThemeChange} 
                        generateColor={this.props.generateColor}
                    />
                </SideNav>
            </Col>
        );
}