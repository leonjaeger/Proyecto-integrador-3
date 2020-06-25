import React, {Component} from 'react';
import {StyleSheet, View, Text, Button,TouchableOpacity, Image} from 'react-native';
import Colors from '../../Config/Colors';

const ButtonIcon= ({onPressButton, imageSrc})=>{
    return(
        
            <TouchableOpacity 
            style={styles.button }
            onPress={onPressButton} >
            <Image source={imageSrc} style={styles.imageStyle}/>
            </TouchableOpacity>
        
    );S


}
const styles = StyleSheet.create({ 
    button: { 
      display: 'flex', 
      height: 30, 
      width: 30, 
      justifyContent: 'center', 
      alignItems: 'center', 
      margin: 10 
    }, 
    imageStyle: { 
      padding: 10, 
      margin: 5, 
      height: 25, 
      width: 25, 
      resizeMode: 'stretch' 
    } 
  });
export default ButtonIcon;