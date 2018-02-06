import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({text}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    text: {
        fontSize: 20
    }
});

export default Header;