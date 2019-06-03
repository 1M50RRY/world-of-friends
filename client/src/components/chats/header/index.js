import React from 'react';
import '../../../css/chats.css'
import SideBar from './sidebar'
import Interlocutor from './interlocutor'
import ChatActions from './chat-actions'
import { Col, Row } from 'react-materialize'


const Header = (props) => {
    return (
        <Row style={props.generateColor('#607d8b', 'teal', 'white', 'white')}>
            <SideBar 
                onUserNameChange={props.onUserNameChange} 
                onThemeChange={props.onThemeChange}
                user={props.user}
                generateColor={props.generateColor}
            />
            <Col m={2} style={{ marginTop: '15px', marginLeft: '-25px', marginRight: '25px' }}>
                <a href="#" className="header-logo">World of Friends</a>
            </Col>
            <Interlocutor
                name={props.name}
                country={props.country}
                lastSeen={props.lastSeen}
                generateColor={props.generateColor}
            />
            <ChatActions 
                isBlocked={props.isBlocked} 
                id={props.id} 
                onBlock={props.onBlock}
                generateColor={props.generateColor}
            />
        </Row>
    );
}

export default Header;