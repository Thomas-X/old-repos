import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: null,
    };

    render () {
        console.log('settings');
        return (
            <StyledView>
                <Text>Hi from settings!</Text>
            </StyledView>
        );
    }
}
