import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import Images from '../../Config/images';
import Colors from '../../Config/Colors';
import OnboardingFactory from '../../Components/Onboarding/OnboardingFactory';

const WelcomeScreen = ({navigation}) => {

    return(

        <OnboardingFactory
        stilo={stylesLoginScreen.container}
        source={Images.SCREEN1}
        Next={'next'}
        Prev={'Prev'}
        text1={'PDM'}
        text2={'Progamacion de dispositivos moviles'}
        text3={'Unifranz'}
        onPressNext={()=> navigation.navigate('AboutScreen')}
        
        ></OnboardingFactory>
        


    );

};
const stylesLoginScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.leaf,
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
export default WelcomeScreen;