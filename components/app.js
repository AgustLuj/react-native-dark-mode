import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Light,Dark} from '../styles';
import { StyleSheet, Text, View,Button } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: true
        };
    }
    render() {
        let {d}=this.state;
        let style =(d)?Light:Dark;
        return (
            <View style={style.container}>
              <Text style={style.text}>Open up App.js to start working on your app!</Text>
              <Button
                title="Press me"
                onPress={() => this.setState({d:(d)?false:true})}
              />
              <StatusBar style="auto" />
            </View>
          );
    }
}
export default App;