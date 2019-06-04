import React from 'react';
import '../../../../../../css/chats.css'
import { countryData } from '../../../../../../data'
import { Autocomplete } from 'react-materialize'


class CountrySelector extends React.Component {
    render() {
        return (
            <Autocomplete 
                options={{data: countryData}} 
                placeholder="Country" 
                icon="flag" 
                style={this.props.generateColor('transparent', 'transparent', 'white', 'black')}
            />
        );
    }
}

export default CountrySelector;