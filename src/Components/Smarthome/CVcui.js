import React, {Component, useState} from 'react';
import {StyleSheet,View,Text,TextInput,Image} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../Config/Colors';
import CVcasos from './CVcase';
export default class CVciudad extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return(
            <View>
                
                
                <Text style={stylesTextInput.texto} >{this.props.Ciudad}</Text>

                <Text style={stylesTextInput.texto} >{this.props.Text}</Text>
                <CVcasos
                placeholder={this.props.placeholder}
                placeholder2={this.props.placeholder2}
                
                />
                
                
                
                </View>


        );
    }


}
CVciudad.propTypes={

    source: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
};
const stylesTextInput = StyleSheet.create({
    textInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      alignItems: 'center',
      height: 40,
      borderColor: Colors.silver,
      paddingLeft: 40,
      borderRadius: 15,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 15,
      marginLeft:50,
    },
    inlineImg: {
      position: 'absolute',
      zIndex: 99,
      width: 22,
      height: 22,
      left: 10,
      top: 9,
    },
    texto:{

        borderColor:Colors.white,
        color:'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        
        
    },
    container:{
        
        alignItems:'center',
        justifyContent:'center',
        
    },
  });