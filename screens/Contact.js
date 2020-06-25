import React from 'react';
import {StyleSheet,View, Text} from 'react-native';

const Contact = () => {

    return(
        <View style={styles.container}>
            <Text style={{color:'white'}}> Contact</Text>
        </View>


    );

};
export default Contact;

const styles = StyleSheet.create({
    body:{
      flex:1,
      flexDirection:'column',
      
    },
    container:{
      flex:1,
      backgroundColor: '#41D5FB',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    box:{
      height:100
    }
  });