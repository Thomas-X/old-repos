import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { TabBarBottom, TabNavigator } from 'react-navigation';
import { client } from './config/client';

import Colors from './constants/Colors';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';

export default () => (
    <ApolloProvider client={client}>
        <Main/>
    </ApolloProvider>
)

const Main = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Search: {
            screen: SearchScreen,
        },
        Settings: {
            screen: SettingsScreen,
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Home':
                        iconName = 'database';
                        return (
                            <FontAwesome
                                name={iconName}
                                size={focused ? 30 : 28}
                                style={{ marginBottom: -3 }}
                                color={focused ? Colors.primaryColor : Colors.primaryTextColor}
                            />
                        );
                        break;
                    case 'Search':
                        iconName = 'md-search';
                        return (
                            <Ionicons
                                name={iconName}
                                size={focused ? 30 : 28}
                                style={{ marginBottom: -3 }}
                                color={focused ? Colors.primaryColor : Colors.primaryTextColor}
                            />
                        );
                        break;
                    case 'Settings':
                        iconName = 'md-options';
                        return (
                            <Ionicons
                                name={iconName}
                                size={focused ? 30 : 28}
                                style={{ marginBottom: -3 }}
                                color={focused ? Colors.primaryColor : Colors.primaryTextColor}
                            />
                        );
                }
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: Colors.primaryTextColor,
            inactiveTintColor: Colors.primaryTextColor,
            style: {
                backgroundColor: Colors.primaryLightColor,
            },
        },
        animationEnabled: false,
        swipeEnabled: true,
    },
);
