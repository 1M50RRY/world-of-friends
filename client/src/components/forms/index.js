import React from 'react';
import SignUpForm from './signUpForm'
import { SignInForm } from './signInForm'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { switchForm } from '../../redux/actions/formsActions'
import '../../css/forms.css'

class FormContainer extends React.Component {
    onFormSwitch = () => this.props.switchForm(!this.props.isSignUp);
    render = () => 
         (
            <div className='container'>
                <h1 className='name-logo'>World of Friends</h1>
                { this.props.isSignUp ? 
                    <SignUpForm onFormSwitch={() => this.onFormSwitch()} onAuth={this.props.onAuth}/> 
                    : 
                    <SignInForm onFormSwitch={() => this.onFormSwitch()} onAuth={this.props.onAuth}/> 
                }
            </div>
        );
}

export default connect(
    (state) => ({isSignUp: state.forms.isSignUp}), 
    (dispatch) => bindActionCreators({switchForm: switchForm}, dispatch)
)(FormContainer);