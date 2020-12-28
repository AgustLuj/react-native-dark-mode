import React from 'react';
import { StyleSheet } from 'react-native';

export const Light = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        color:'black',
    },
    headerStyle:{
      backgroundColor: '#f6b93b',
      justifyContent: 'space-around',
      borderBottomColor:'#bdc3c7',
      borderBottomWidth:1,
  }
});

export const  Dark = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2f3640',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        color:'white',
    },
    headerStyle:{
      backgroundColor: '#e67e22',
      justifyContent: 'space-around',
      borderBottomColor:'#e67e22',
      borderBottomWidth:1,
  },
});
