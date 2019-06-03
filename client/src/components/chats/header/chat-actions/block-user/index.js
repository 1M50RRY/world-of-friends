import React from 'react';
import '../../../../../css/chats.css'
import { Button } from 'react-materialize'

class BlockUser extends React.Component {

    onUserBlock () {
        this.props.onBlock(this.props.id, !this.props.isBlocked);
    }
    
    render () 
    {
        console.log(this.props.isBlocked);
        let button = this.props.isBlocked ? 
                <UnblockButton onClick={() => this.onUserBlock()} /> 
                : 
                <BlockButton onClick={() => this.onUserBlock()} />;
        return this.props.id !== null ? button : null;
    }
}

const BlockButton = (props) => {
    return (
        <Button waves="light" onClick={props.onClick} className='red darken-1' 
            style={{ WebkitBoxShadow: 'none', boxShadow: 'none', marginTop: '13px', marginBottom: '20px' }}>
            BLOCK
        </Button>
    );
}

const UnblockButton = (props) => {
    return (
        <Button waves="light" onClick={props.onClick} className='white' 
            style={{ WebkitBoxShadow: 'none', boxShadow: 'none', marginTop: '13px', marginBottom: '20px', color:'black' }}>
            UNBLOCK
        </Button>
    );
}

export default BlockUser;