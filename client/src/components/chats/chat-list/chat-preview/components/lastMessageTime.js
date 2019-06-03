import React from 'react';
import '../../../../../css/chats.css'

export const LastMessageTime = (props) => {
    return (
        <p className="secondary-content" style={{ marginTop: '-0.7em' }}>
            <span 
                className="gray-text" 
                style={props.isChatSelected ? {marginRight: '-9px', color: 'white'} : {marginRight: '-9px'}}>
                {props.lastMessageTime}
            </span>
        </p>
    );
}


