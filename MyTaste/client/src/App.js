import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

const MY_QUERY = gql`
    {
        allDishes {
            name
            id
            description
            spoilDays
        }
    }
`;

class App extends Component {
    render () {
        return (
            <div>
                <pre>{JSON.stringify(this.props, null, 4)}</pre>
            </div>
        );
    }
}

export default graphql(MY_QUERY)(App);