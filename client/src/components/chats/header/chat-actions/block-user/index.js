import React from 'react';
import { Button } from 'react-materialize'

export class BlockUser extends React.Component {

    onUserBlock () { this.props.onBlock(); }
    
    render () 
    {
        let button = this.props.blockedById !== this.props.friendId && this.props.blockedById !== null && this.props.isBlocked ? 
                <UnblockButton onClick={() => this.onUserBlock()} /> 
                : 
                <BlockButton onClick={() => this.onUserBlock()} />;
        return this.props.blockedById !== undefined ? button : null;
    }
}

const BlockButton = ({onClick}) => 
    (
        <Button waves="light" onClick={onClick} className='red darken-1' 
            style={{ WebkitBoxShadow: 'none', boxShadow: 'none', marginTop: '13px', marginBottom: '20px' }}>
            BLOCK
        </Button>
    );


const UnblockButton = ({onClick}) => 
    (
        <Button waves="light" onClick={onClick} className='white' 
            style={{ WebkitBoxShadow: 'none', boxShadow: 'none', marginTop: '13px', marginBottom: '20px', color:'black' }}>
            UNBLOCK
        </Button>
    );