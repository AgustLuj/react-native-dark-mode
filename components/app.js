import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import {Light,Dark} from '../styles';
import { StyleSheet, Text, View,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: false,
            dark:false,
        };
        this.getDark();
    }
    async getDark(){
      let value = await AsyncStorage.getItem('@dark');
      if(value === null || value == 'false'){
        this.setState({d:true,dark:false});
      }else{
        global.dark = true;
        this.setState({d:true,dark:true});
      }
    }
    async setDark(){
      try{
        this.setState({d:false});
        await AsyncStorage.setItem('@dark', (global.dark)?'false':'true');
        this.setState({d:true,dark:(this.state.dark)?false:true});
      }catch{
        this.setState({d:true,dark:false});
      }
    }
    render() {
        let {d,dark}=this.state;
        let style =(dark)?Dark:Light;
        return (
          (d)?(
            <View style={style.container}>
              <Text style={style.text}>Open up App.js to start working on your app!</Text>
              <Button
                title="Press me"
                onPress={() => this.setDark()}
              />
            </View>
          ):null
        );
    }
}
export default App;