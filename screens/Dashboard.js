import React from 'react';
import {StyleSheet,View, Text} from 'react-native';
import LoginScreen from '../src/View/login/LoginScreen';
import Dash from '../SmartHome/screens/Dashboard';

const Dashboard = () => {

    return(
        
        
        <Dash></Dash>


    );

};
export default Dashboard;

const styles = StyleSheet.create({
    body:{
      flex:1,
      flexDirection:'column',
     
    },
    container:{
      flex:1,
      backgroundColor: '#88B04B',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    box:{
      height:100
    }
  });