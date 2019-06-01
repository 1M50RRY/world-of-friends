import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './components/forms'
import ChatContainer from './components/chats'
import ErrorBoundary from './components/errorBoundary'
import Cookies from 'js-cookie';
import './css/main.css'
import { Provider } from 'react-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import store from './redux'

class Container extends React.Component {

    checkAuth () {
        //let token = Cookies.get("something");
        // Create request to backend
        //store.dispatch({ type: 'CHANGE_AUTH', isAuthenticated: true });
    }
    
    render () {
        //const isAuthenticated = true;
        return (
            <ErrorBoundary>
                {this.props.isAuthenticated ? <ChatContainer /> : <FormContainer />}
            </ErrorBoundary>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

Container = connect(mapStateToProps)(Container);

// ========================================

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
);
