import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,Image} from 'react-native';
import propTypes from 'prop-types';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default class Input extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){

        return(
            <View>
                <Image 
                style={stylesInput.inlineImg}
                source={this.props.source}/>
                <TextInput
                    style={stylesInput.input}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    placeholderTextColor={"#ffffff"}
                    underlineColorAndroid="transparent"
                
                
                />
                </View>
        );
    }
}
Input.propTypes={

    source: propTypes.number.isRequired,
    placeholder: propTypes.string.isRequired,
    autoCorrect: propTypes.bool,
    secureTextEntry: propTypes.bool,
};
const stylesInput = StyleSheet.create({
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: 310,
      alignItems: 'center',
      height: 40,
      marginHorizontal: 20,
      paddingLeft: 45,
      borderRadius: 20,
      color: '#ffffff',
      marginBottom: 15
    },
    inlineImg: {
      position: 'absolute',
      zIndex: 99,
      width: 22,
      height: 22,
      left: 35,
      top: 9,
    },
  });