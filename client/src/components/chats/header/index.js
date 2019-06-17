import React from 'react';
import SideBar from './sidebar'
import Interlocutor from './interlocutor'
import { ChatActions } from './chat-actions'
import { Col, Row } from 'react-materialize'

export const Header = ({generateColor, onUserNameChange, onThemeChange, user, friend, isBlocked, id, onBlock, blockedById }) => 
    (
        <Row style={generateColor('#607d8b', 'teal', 'white', 'white')}>
            <SideBar 
                onUserNameChange={onUserNameChange} 
                onThemeChange={onThemeChange}
                user={user}
                generateColor={generateColor}
            />
            <Col m={2} style={{ marginTop: '15px', marginLeft: '-25px', marginRight: '25px' }}>
                <a href="#" className="header-logo">World of Friends</a>
            </Col>
            <Interlocutor
                name={friend.name}
                country={friend.country}
                lastSeen={friend.last_login}
                generateColor={generateColor}
            />
            <ChatActions 
                isBlocked={isBlocked} 
                id={id} 
                onBlock={onBlock}
                generateColor={generateColor}
                blockedById={blockedById}
                friendId={friend.id}
            />
        </Row>
    );
