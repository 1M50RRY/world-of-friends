import React from 'react';

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    componentDidCatch (error, info) {
        this.setState({
            hasError: true
        });
    }

    render () {
        return this.state.hasError ? 
        (
            <div>
                Ошибка
            </div>
        )
        :
        this.props.children;
    }
}