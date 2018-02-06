import React from 'react';
import {Text, View, AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
// import App from './App';
import Header from './src/components/header';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const App = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Settings: {
        screen: SettingsScreen
    }
});

AppRegistry.registerComponent('leitner', () => App);
