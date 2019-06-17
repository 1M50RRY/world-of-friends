import React from 'react';
import FindFriend from './find-friend'
import { BlockUser } from './block-user'
import { Col } from 'react-materialize'

export const ChatActions = ({generateColor, isBlocked, friendId, onBlock, id, blockedById}) => 
    (
        <Col m={6} style={{ textAlign: 'right' }}>
            <FindFriend generateColor={generateColor} />
            <BlockUser 
                isBlocked={isBlocked} 
                friendId={friendId} 
                onBlock={onBlock} 
                id={id}
                blockedById={blockedById}
            />
        </Col>
    );
