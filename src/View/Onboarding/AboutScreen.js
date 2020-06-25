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
const AboutScreen = ({navigation}) => {

    return(
        <OnboardingFactory
        stilo={stylesLoginScreen.container}
        source={Images.SCREEN2}
        Next={'next'}
        Prev={'Prev'}
        text1={'Defensa Hito 3'}
        text2={'Univ:Glenn Julian Castro Duarte'}
        text3={'gestion 2020'}
        onPressNext={()=> navigation.navigate('TaskScreen')}
        onPressPrev={()=> navigation.navigate('WelcomeScreen')}
        ></OnboardingFactory>
        


    );

};
const stylesLoginScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.orange,
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
export default AboutScreen;