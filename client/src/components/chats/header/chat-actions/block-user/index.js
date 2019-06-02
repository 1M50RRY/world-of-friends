import React from 'react';
import '../../../../../css/chats.css'
import { Button } from 'react-materialize'

class BlockUser extends React.Component {

    onUserBlock () {
        this.props.onBlock(this.props.id, !this.props.isBlocked);
    }
    
    render () 
    {
        let button = this.props.isBlocked ? 
                <UnblockButton onClick={() => this.onUserBlock()} /> 
                : 
                <BlockButton onClick={() => this.onUserBlock()} />;
        return this.props.id !== undefined ? button : null;
    }
}

const BlockButton = (props) => {
    return (
        <Button waves="light" onClick={props.onClick} className='red darken-1' style={{ marginTop: '13px', marginBottom: '20px' }}>
            BLOCK
        </Button>
    );
}

const UnblockButton = (props) => {
    return (
        <Button waves="light" onClick={props.onClick} className='white' style={{ marginTop: '13px', marginBottom: '20px', color:'black' }}>
            UNBLOCK
        </Button>
    );
}

export default BlockUser;