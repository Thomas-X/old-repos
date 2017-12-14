import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components/native';
import { Home } from '../queries/index';

const StyledView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const StyledText = styled.Text`
    font-size: 16px;
`;

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render () {
        return (
            <StyledView>
                <StyledText>Hi world from home!</StyledText>
                <StyledText>{JSON.stringify(this.props, null, 4)}</StyledText>
            </StyledView>
        );
    }
}

export default graphql(Home.getAllDishes)(HomeScreen);