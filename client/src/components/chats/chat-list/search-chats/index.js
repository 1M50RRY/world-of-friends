import React from 'react';
import '../../../../css/chats.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Chip, CollectionItem, Icon, Collection, Col } from 'react-materialize'

class SearchChats extends React.Component {
    render() {
        return (
            <nav style={Object.assign(
                    { width: '294px', backgroundColor: '#F2F2F2', marginTop: '15px', marginBottom: '10px' },
                    this.props.generateColor('#607d8b', '#F2F2F2', 'white', 'black')
                )
                }>
                <div class="nav-wrapper">
                    <div class="input-field">
                        <input id="search" type="search" placeholder='Search' required onChange={this.props.onSearch}/>
                        <label class="label-icon" for="search">
                            <i style={this.props.generateColor('transparent', 'transparent', '#b0bec5', 'black')} class="material-icons">
                                search
                            </i>
                        </label>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SearchChats;