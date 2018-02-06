import React, {Component} from 'react';
import {Button, View} from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Button
                    title="Start"
                    onPress={() => {}
                    }
                />
                <Button
                    title="Settings"
                    onPress={() => navigate('Settings')
                    }
                />
            </View>
        );
    }
}

export default HomeScreen;