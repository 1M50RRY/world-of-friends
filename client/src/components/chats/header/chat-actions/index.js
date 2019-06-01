import React from 'react';
import '../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FindFriend from './find-friend'
import BlockUser from './block-user'
import { Col } from 'react-materialize'


const ChatActions = (props) => {
    return (
        <Col m={6} style={{ textAlign: 'right' }}>
            <FindFriend />
            <BlockUser />
        </Col>
    );
}

export default ChatActions;