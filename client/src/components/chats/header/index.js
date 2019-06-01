import React from 'react';
import '../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SideBar from './settings'
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
            <Interlocutor />
            <ChatActions />
        </Row>
    );
}

export default Header;