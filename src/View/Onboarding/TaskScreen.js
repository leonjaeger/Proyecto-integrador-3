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
const TaskScreen = ({navigation}) => {

    return(
        <OnboardingFactory
        stilo={stylesLoginScreen.container}
        source={Images.SCREEN3}
        Next={'next'}
        Prev={'Prev'}
        text1={'FIREBASE'}
        text2={'integracion de React-native'}
        text3={'con firebase'}
        onPressPrev={()=> navigation.navigate('AboutScreen')}
        onPressNext={()=> navigation.navigate('login')}
        ></OnboardingFactory>
        


    );

};
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
export default TaskScreen;