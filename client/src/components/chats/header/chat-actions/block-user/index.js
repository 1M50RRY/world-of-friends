import React from 'react';
import '../../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
import { blockUser } from '../../../../../redux/actions'

class BlockUser extends React.Component {

    onUserBlock () {
        const reversedIsUserBlocked = !this.props.isUserBlocked;
        this.props.blockUser(reversedIsUserBlocked);
    }
    
    render () 
    {
        let button = this.props.isUserBlocked ? 
                <UnblockButton onClick={() => this.onUserBlock()} /> 
                : 
                <BlockButton onClick={() => this.onUserBlock()} />;
        return button;
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

function mapStateToProps (state) {
    return {
        isUserBlocked: state.users.isUserBlocked
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({blockUser: blockUser}, dispatch);
} 

export default connect(mapStateToProps, matchDispatchToProps)(BlockUser);