import React, {Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import Colors from '../../Config/Colors';
import Buton from './Button';
import { styles } from 'expo-ui-kit';
export default class ButtonFooter extends Component{
constructor(props){
    super(props);   

}


render(){
    return(
        <View style={stylesButton.row}>                  
            <Buton           
            titleButton={this.props.Prev}
            onPress={this.props.onPressPrev}
            />
            <Buton     
            titleButton={this.props.Next} 
            onPress={this.props.onPressNext}
            
            />
            
            
        </View>
        
        
    );
}

}
const stylesButton = StyleSheet.create({
    container: {
      width: '100%',
      
      justifyContent: 'center',
      backgroundColor: 'transparent',
      marginBottom: 12,
      paddingVertical: 12,
      borderRadius: 20,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'rgba(255,255,255,0.7)',
      width: 70,
    },
    text: {
      color: Colors.white,
      textAlign: 'center',
      height: 20,
    },
    row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,



    },
    

    
  });