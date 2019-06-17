import React from 'react';
import { Chip, Icon } from 'react-materialize'

export const SecondaryContent = ({isChatSelected, generateColor, isMyMessageLast, unreadMessages, checked}) => {
    return (
        <p className="secondary-content" style={
                isChatSelected ? 
                    generateColor('transparent', 'transparent', 'white', 'white') 
                    : 
                    generateColor('transparent', 'transparent', '#b0bec5', 'teal')
            }
        >
            {
                !isMyMessageLast && 
                !isChatSelected &&
                unreadMessages !== 0 && 
                <UnreadMessage count={unreadMessages} color={generateColor('#b0bec5', 'teal', 'white', 'white')} />
            }
            {
                isMyMessageLast && <CheckMessage isChecked={checked} />
            }
        </p>
    );
}

const UnreadMessage = ({color, count}) => {
    return (    
        <Chip className="msg-props" style={color}>
            <span className="msg-count">{ count.toString() }</span>
        </Chip>
    );
}

const CheckMessage = ({isChecked}) => {
    return (
        <Icon className="msg-props">
            {isChecked ? 'done_all' : 'done'}
        </Icon>
    );
}