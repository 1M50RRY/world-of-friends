import React from 'react';

export const LastMessageTime = ({isChatSelected, generateColor, lastMessageTime}) => {
    return (
        <p className="secondary-content" style={{ marginTop: '-0.7em' }}>
            <span 
                className="gray-text" 
                style={Object.assign({marginRight: '-9px'},
                    isChatSelected ? 
                        generateColor('transparent', 'transparent', 'white', 'white')
                        :
                        generateColor('transparent', 'transparent', '#b0bec5', 'rgba(116, 116, 116, 0.87)')
                )}
            >
                {lastMessageTime}
            </span>
        </p>
    );
}


