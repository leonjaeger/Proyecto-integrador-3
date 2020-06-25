import React, {Component, useState} from 'react';
import {StyleSheet,View,Text,TextInput,Image} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../Config/Colors';
import constants from '../../Config/constants';
export default class CVcasos extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return(
            <View>
                
                
                
                
                
                <TextInput
                    style={stylesTextInput.textInput}
                    onChangeText={this.props.onChangeText}                    
                    selectionColor={Colors.blue}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    placeholderTextColor={"#ffffff"}
                    underlineColorAndroid="transparent"
                
                
                />
                 <TextInput
                    style={stylesTextInput.textInput}
                    onChangeText={this.props.onChangeText}                    
                    selectionColor={Colors.blue}
                    placeholder={this.props.placeholder2}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    placeholderTextColor={"#ffffff"}
                    underlineColorAndroid="transparent"
                
                
                />
                </View>


        );
    }


}
CVcasos.propTypes={

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