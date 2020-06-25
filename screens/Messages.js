import React from 'react';
import {StyleSheet,View, Text} from 'react-native';
import Ventalizacion from '../src/View/SmartHome/ventilacion';

const Messages = () => {

    return(
        <Ventalizacion></Ventalizacion>


    );

};
export default Messages;

const styles = StyleSheet.create({
    body:{
      flex:1,
      flexDirection:'column',
      
    },
    container:{
      flex:1,
      backgroundColor: '#FFC46B',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    box:{
      height:100
    }
  });