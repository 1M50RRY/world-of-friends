import React from 'react';

export const InterlocutorName = ({isChatSelected, generateColor, name}) => 
    (
        <span 
            className="title main-text" 
            style={
                isChatSelected ? 
                    generateColor('transparent', 'transparent', 'white', 'white') 
                    :
                    generateColor('transparent', 'transparent', 'white', 'black') 
            }
        >
            {name.slice(0, 18).trim()}
            {name.length > 18 && '...'}
        </span>
    );