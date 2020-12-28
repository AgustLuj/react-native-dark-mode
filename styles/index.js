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
    }
});
