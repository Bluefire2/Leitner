import React, {Component} from 'react';
import {Button, Text} from 'react-native';

class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go back home"
                onPress={() => navigate('Home')
                }
            />
        );
    }
}

export default SettingsScreen;