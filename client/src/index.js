import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './components/forms'
import ChatContainer from './components/chats'
import ErrorBoundary from './components/errorBoundary'
import './css/main.css'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUser } from './redux/actions/userActions'
import store from './redux'
import axios from 'axios'
axios.defaults.withCredentials = true;

class Container extends React.Component {
    onAuth = ( user ) => {
        console.log(user);
        if (user !== null)
            this.props.setUser({
                name: user.name, 
                avatar: user.avatar,
                email: user.email,
                theme: user.theme
            });
    }

    checkAuth = () => {
        axios.get('http://localhost:3000/users/get', { headers: { "Access-Control-Allow-Origin": "*", } }).then(response => {
            console.log(response);
            if (response.data.status === 'OK')
                this.onAuth(Object.assign(response.data.user, response.data.userData))
            else 
                this.onAuth(null);
        });
    }

    componentDidMount () {
        this.checkAuth();
    }

    render() {
        return (
            <ErrorBoundary>
                {this.props.user.name === null ? <FormContainer onAuth={this.onAuth}/> : <ChatContainer user={this.props.user} />}
            </ErrorBoundary>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ setUser: setUser }, dispatch);
}

Container = connect(mapStateToProps, matchDispatchToProps)(Container);

// ========================================

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
);
