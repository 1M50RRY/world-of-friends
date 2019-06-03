import React from 'react';
import '../../../../../css/chats.css'

export const LastMessageTime = (props) => {
    return (
        <p className="secondary-content" style={{ marginTop: '-0.7em' }}>
            <span 
                className="gray-text" 
                style={Object.assign({marginRight: '-9px'},
                    props.isChatSelected ? 
                        props.generateColor('transparent', 'transparent', 'white', 'white')
                        :
                        props.generateColor('transparent', 'transparent', '#b0bec5', 'rgba(116, 116, 116, 0.87)')
                )}
            >
                {props.lastMessageTime}
            </span>
        </p>
    );
}


