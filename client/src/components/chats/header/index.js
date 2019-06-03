import React from 'react';
import '../../../css/chats.css'
import SideBar from './sidebar'
import Interlocutor from './interlocutor'
import ChatActions from './chat-actions'
import { Col, Row } from 'react-materialize'


const Header = (props) => {
    return (
        <Row style={{ backgroundColor: 'teal' }}>
            <SideBar />
            <Col m={2} style={{ marginTop: '15px' }}>
                <a href="#" className="header-logo">World of Friends</a>
            </Col>
            <Interlocutor
                name={props.name}
                country={props.country}
                lastSeen={props.lastSeen}
            />
            <ChatActions isBlocked={props.isBlocked} id={props.id} onBlock={props.onBlock}/>
        </Row>
    );
}

export default Header;