import React from 'react';
import '../../../../../css/chats.css'

export const LastMessagePreview = (props) => {
    return (
        <p>
            <br />
            { props.isMyMessageLast && 
            <span className="new-msg-text" style={props.isChatSelected ? {color: 'white'} : {color: 'teal'}}>
                You: 
            </span> }
            <span 
                className={props.isMyMessageLast ? "def-msg-text" : "new-msg-text"} 
                style={{color: props.color
                }}
            >
                {' ' + props.lastMessageText.slice(0, 22).trim()}
                {props.lastMessageText.length > 22 && '...'}
            </span>
        </p>
    );
}

