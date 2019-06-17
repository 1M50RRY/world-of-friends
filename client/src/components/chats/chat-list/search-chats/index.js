import React from 'react';

export const SearchChats = ({generateColor, onSearch}) =>
    (
        <nav style={Object.assign(
                { width: '294px', backgroundColor: '#F2F2F2', marginTop: '15px', marginBottom: '10px' },
                generateColor('#607d8b', '#F2F2F2', 'white', 'black')
            )
            }>
            <div class="nav-wrapper">
                <div class="input-field">
                    <input id="search" type="search" placeholder='Search' required onChange={onSearch}/>
                    <label class="label-icon" for="search">
                        <i style={generateColor('transparent', 'transparent', '#b0bec5', 'black')} class="material-icons">
                            search
                        </i>
                    </label>
                </div>
            </div>
        </nav>
    );
