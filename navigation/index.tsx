import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

const navigationTheme: Theme = {
    dark: false,
    colors: {
        primary: '#FFFFFF',
        background: '#F8F9FA',
        card: '#FFFFFF',
        text: '#FFFFFF',
        border: '#FFFFFF',
        notification: '#FFFFFF',
    },
};

export default function Navigation() {
    return (
        <NavigationContainer
            theme={ navigationTheme }>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={ BottomTabNavigator } options={ { headerShown: false } }/>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            screenOptions={ {
                tabBarActiveTintColor: Colors[colorScheme].tint,
            } }>
            <BottomTab.Screen
                name="TabOne"
                component={ TabOneScreen }
                options={ ({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                    title: 'Tab One',
                    tabBarIcon: ({ color }) => <TabBarIcon name="motorcycle" color={ color }/>,
                }) }
            />
            <BottomTab.Screen
                name="TabTwo"
                component={ TabTwoScreen }
                options={ {
                    title: 'Tab 2',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={ color }/>,
                } }
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={ 30 } style={ { marginBottom: -3 } } { ...props } />;
}
