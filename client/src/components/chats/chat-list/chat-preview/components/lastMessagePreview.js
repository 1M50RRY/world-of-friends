import React from 'react';

export const LastMessagePreview = ({isMyMessageLast, isChatSelected, generateColor, color, lastMessageText}) => {
    return (
        <p>
            <br />
            { isMyMessageLast && 
            <span 
                className="new-msg-text" 
                style={
                    isChatSelected ? 
                        generateColor('transparent', 'transparent', 'white', 'white')
                        :
                        generateColor('transparent', 'transparent', '#eceff1', 'teal')
                }
            >
                You: 
            </span> }
            <span 
                className={isMyMessageLast ? "def-msg-text" : "new-msg-text"} 
                style={color}
            >
                {' ' + lastMessageText.slice(0, 22).trim()}
                {lastMessageText.length > 22 && '...'}
            </span>
        </p>
    );
}

