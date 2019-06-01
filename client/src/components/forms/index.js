import React from 'react';
import '../../css/forms.css'
import SignUpForm from './sign-up'
import SignInForm from './sign-in'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { switchForm } from '../../redux/actions'

class FormContainer extends React.Component {
    onFormSwitch () {
        const reversedIsSignUp = !this.props.isSignUp;
        this.props.switchForm(reversedIsSignUp);
        //store.dispatch({ type: 'CHANGE_FORM', isSignUp: reversedIsSignUp});
    }

    render () {
        return (
            <div className='container'>
                <h1 className='name-logo'>World of Friends</h1>
                { this.props.isSignUp ? <SignUpForm onFormSwitch={() => this.onFormSwitch()}/> : <SignInForm onFormSwitch={() => this.onFormSwitch()}/> }
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        isSignUp: state.forms.isSignUp
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({switchForm: switchForm}, dispatch);
} 

export default connect(mapStateToProps, matchDispatchToProps)(FormContainer);