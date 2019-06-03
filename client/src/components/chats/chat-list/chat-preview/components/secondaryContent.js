import React from 'react';
import '../../../../../css/chats.css'
import { Chip, Icon } from 'react-materialize'

export const SecondaryContent = (props) => {
    return (
        <p className="secondary-content" style={props.isChatSelected ? { color: 'white' } : {color: 'teal'}}>
            {
                !props.isMyMessageLast && 
                !props.isChatSelected &&
                props.unreadMessages !== 0 && 
                <UnreadMessage count={props.unreadMessages} />
            }
            {
                props.isMyMessageLast && <CheckMessage isChecked={props.checked} />
            }
        </p>
    );
}

const UnreadMessage = (props) => {
    return (
        <Chip className="teal msg-props">
            <span className="msg-count">{ props.count.toString() }</span>
        </Chip>
    );
}

const CheckMessage = (props) => {
    return (
        <Icon className="msg-props">
            {props.isChecked ? 'done_all' : 'done'}
        </Icon>
    );
}