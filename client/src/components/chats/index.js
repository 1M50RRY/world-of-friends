import React from 'react';
import '../../css/chats.css'
import { chats } from '../../data'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './header'
import ChatList from './chat-list'
import { SendForm } from './send-form'
import ChatBox from './chat-box'
import { Row } from 'react-materialize'

export default class ChatContainer extends React.Component {

    render() {
        return (
            <div className="container" style={{backgroundColor: 'white'}}>
                <Header />
                <Row>
                    <ChatList />
                    <ChatBox messages={chats[0].lastMessages}/>
                </Row>
                <Row>
                    <SendForm />
                </Row>
            </div>
        );
    }
}