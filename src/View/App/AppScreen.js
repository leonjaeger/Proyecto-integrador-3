import React,{useLayoutEffect, useState, useEffect} from 'react'
import {StyleSheet, View,Text, Alert} from 'react-native';
import Colors from '../../Config/Colors';
import ButtonIcon from '../../Components/login/ButtonIcon';
import Images from '../../Config/images';
import FirebasePlugin from '../../plugins/firebase/Firebase';
const AppScreen =({navigation}) => {

    const onPressSetting=()=>{
        navigation.navigate('Setting');
    }

    const onPressLogout=()=>{
        try{
            FirebasePlugin.auth().signOut()
            .then(()=>{

                Alert.alert('logout app', 'succesfully logout',[{
                    text: 'Login App', onPress:()=>{navigation.navigate('login')}
                }]);
            });

        }catch (e){
            Alert.alert('Contact admin', e.message);
        }



    };



    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft:()=>(
                <ButtonIcon imageSrc={Images.SETTING} onPressButton={onPressSetting}/>
            ),
            headerRight:()=>(
                <ButtonIcon imageSrc={Images.LOGOUT} onPressButton={onPressLogout}/>
            )

        })
    });
    return(

        <View style={styles.container}>

            <Text>
                AppScreen
            </Text>
        </View>
    );


}
const styles = StyleSheet.create({

    container:{
        flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',


    },

});
export default AppScreen;