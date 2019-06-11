import React from 'react';
import FindFriend from './find-friend'
import BlockUser from './block-user'
import { Col } from 'react-materialize'


const ChatActions = (props) => {
    return (
        <Col m={6} style={{ textAlign: 'right' }}>
            <FindFriend generateColor={props.generateColor} />
            <BlockUser 
                isBlocked={props.isBlocked} 
                friendId={props.friendId} 
                onBlock={props.onBlock} 
                id={props.id}
                blockedById={props.blockedById}
            />
        </Col>
    );
}

export default ChatActions;