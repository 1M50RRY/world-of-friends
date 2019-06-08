import React from 'react';
import { countryData } from '../../../../../data'
import { Textarea, Modal, Button, Checkbox, Autocomplete } from 'react-materialize'
import axios from 'axios'
axios.defaults.withCredentials = true;

class FindFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            country: '',
            //gender: '',
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onAutocomplete = (e) => {
        console.log(e);
        this.setState({country: e});
    }

    onClick = () => {
        //this.setState({country: document.getElementById('autocomplete-34').value});
        axios.post("http://localhost:3000/chats/find", this.state, { headers: { "Access-Control-Allow-Origin": "*", } })
        .then(res => { 
            if (res.data.status === 'OK'){
                console.log("Friend found");
            } 
        });
    }

    render() {
        return (
            <Modal header="Search for new friends" style={this.props.generateColor('#607d8b', 'white', 'white', 'black')} fixedFooter trigger={
                <Button
                    waves="light"
                    style={
                        Object.assign({}, {
                            WebkitBoxShadow: 'none',
                            boxShadow: 'none',
                            marginTop: '13px',
                            marginBottom: '20px',
                            marginRight: '10px'
                        },
                            this.props.generateColor('#37474f', '#009688', 'white', 'white'))
                    }
                >
                    FIND NEW FRIEND
                </Button>
            }>
                <Textarea 
                    name="content" 
                    icon="chat" 
                    label="Your message" 
                    onChange={this.onChange}
                    style={this.props.generateColor('transparent', 'transparent', 'white', 'black')} 
                />
                <Autocomplete
                    options={{ data: countryData, onAutocomplete: this.onAutocomplete }}
                    name="country"
                    placeholder="Country"
                    id="autocomplete-34"
                    icon="flag"
                    style={this.props.generateColor('transparent', 'transparent', 'white', 'black')}
                />
                {/*
                <Checkbox
                    value="Male"
                    label="Male"
                    filledIn
                    checked
                />
                <br />
                <Checkbox
                    value="Female"
                    label="Female"
                    filledIn
                    checked
                />*/
                }
                <Button
                    style={
                        Object.assign({},
                            { marginTop: '270px', width: '100%' },
                            this.props.generateColor('#37474f', '#009688', 'white', 'white')
                        )
                    }
                    onClick={this.onClick}
                >
                    Send
                </Button>
            </Modal>
        );
    }
}

export default FindFriend;