import React from 'react';
import '../../../../../css/chats.css'
import { Chip, Icon } from 'react-materialize'

export const SecondaryContent = (props) => {
    return (
        <p className="secondary-content" style={
                props.isChatSelected ? 
                    props.generateColor('transparent', 'transparent', 'white', 'white') 
                    : 
                    props.generateColor('transparent', 'transparent', '#b0bec5', 'teal')
            }
        >
            {
                !props.isMyMessageLast && 
                !props.isChatSelected &&
                props.unreadMessages !== 0 && 
                <UnreadMessage count={props.unreadMessages} color={props.generateColor('#b0bec5', 'teal', 'white', 'white')} />
            }
            {
                props.isMyMessageLast && <CheckMessage isChecked={props.checked} />
            }
        </p>
    );
}

const UnreadMessage = (props) => {
    return (    
        <Chip className="msg-props" style={props.color}>
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