import React, {useState,Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';


import Colors from '../../Config/Colors';
import ButtonFooter from '../../Components/Onboarding/ButtonFooter';
import Description from '../../Components/Onboarding/Description';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const _onPressNext = () => {
    console.log('Next')
  };
  const _onPressPrev = () => {
    console.log('Prev')
  };

export default class OnboardingFactory extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={this.props.stilo} >
            <View style={{marginTop:100}}>
            <Description
                source={this.props.source}
                text1={this.props.text1}
                text2={this.props.text2}
                text3={this.props.text3}       
            />
            <ButtonFooter
            style={{marginTop:100}}
            Next={this.props.Next}
            onPressNext={this.props.onPressNext}
            Prev={this.props.Prev}
            onPressPrev={this.props.onPressPrev}          
            />
            </View>
        </View>
        );
    }
}
const stylesLoginScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.blue,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '100%',
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    form: {
      justifyContent: 'center',
      width: '80%',
      marginBottom: 20,
    },
  });

