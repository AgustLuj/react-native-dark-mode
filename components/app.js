import React, { Component } from 'react';
import {Light,Dark} from '../styles';
import { StyleSheet, Text, View,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from 'react-native-elements';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: false,
            dark:false,
        };
    }
    async componentDidMount(){
      let value = await AsyncStorage.getItem('@dark');
      if(value === null || value == 'false'){
        this.setState({dark:false});
      }else{
        this.setState({dark:true});
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
          <View style = {{flex:1}}>
            <Header
                      placement="left"
                      leftComponent={{ icon: 'home', color: '#fff' ,onPress: () => null }}
                      rightComponent={{ icon: 'menu', color: '#fff',onPress: () => null }}
                      containerStyle={style.headerStyle}
                      />
            <View style={style.container}>
              <Text style={style.text}>Open up App.js to start working on your app!</Text>
              <Button
                title="Press me"
                onPress={() => this.setDark()}
                />
            </View>
          </View>
        );
    }
}
export default App;