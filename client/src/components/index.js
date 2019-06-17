import React from 'react';
import FormContainer from './forms'
import ChatContainer from './chats'
import ErrorBoundary from './errorBoundary'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUser } from '../redux/actions/userActions'
import { axiosGet } from '../functions/api'
import '../css/main.css'

class Container extends React.Component {
    onAuth = (user) => {
        if (user !== null)
            this.props.setUser({
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                email: user.email,
                theme: user.theme
            });
    }

    checkAuth = () => {
        axiosGet('http://localhost:3000/users/get').then(response =>
            response.data.status === 'OK' ?
                this.onAuth(Object.assign(response.data.user, response.data.userData))
                :
                this.onAuth(null)
        );
    }

    componentWillMount() {
        this.checkAuth();
    }

    render() {
        return (
            <ErrorBoundary>
                {this.props.user.name === null ? <FormContainer onAuth={this.onAuth} /> : <ChatContainer user={this.props.user} />}
            </ErrorBoundary>
        );
    }
}

export default connect(
    (state) => ({user: state.user}), 
    (dispatch) => bindActionCreators({ setUser: setUser }, dispatch)
)(Container);