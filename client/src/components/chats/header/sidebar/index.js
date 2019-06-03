import React from 'react';
import '../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeName, changeAvatar } from '../../../../redux/actions'
import { SideNav, Col, SideNavItem, Button } from 'react-materialize'
import { Settings } from './settings'

class SideBar extends React.Component {
    onUserNameChange = ( value ) => {
        this.props.changeName(value);
    }

    render() {
        return (
            <Col m={1} style={{ marginTop: '1.2em' }}>
                <SideNav trigger={<Button icon='menu' />} options={{ closeOnClick: true }}>
                    <SideNavItem userView style={{ backgroundColor: 'teal' }} user={{
                        image: this.props.user.avatar,
                        name: this.props.user.name,
                        email: this.props.user.email
                    }} />
                    <Settings onUserNameChange={this.onUserNameChange} />
                </SideNav>
            </Col>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeName: changeName,
        changeAvatar: changeAvatar
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SideBar);