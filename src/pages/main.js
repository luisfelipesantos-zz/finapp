import React, { Component } from 'react';

import { View, Text } from 'react-native';
 
export default class Main extends Component {

    static navigationOptions = {
        title: "FinApp"
    }


    render() {
        return (
            <View>
                <Text>Hello World!</Text>
            </View>
        );
    }
}