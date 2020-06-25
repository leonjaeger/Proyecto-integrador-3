import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Colors from '../Config/Colors';
import Contansts from '../Config/constants';
 const CTextField=({value, placeholder, autoCorrect, error, onChange, onValidate})=>{
     return(

        <View>
            <Text style={styles.error}>{error}</Text>
            <View style={styles.fieldView}>
                <TextInput
                style={styles.field}
                value={value}
                autoCorrect={autoCorrect}
                placeholder={placeholder}
                onChangeText={onChange}
                onEndEditing={onValidate}
                
                
                
                
                
                ></TextInput>


            </View>
        </View>
     );



 }

 const styles =StyleSheet.create({
     
     error:{
         fontSize:12,
         color: Colors.red,
         marginBottom:-5,
         marginHorizontal: 20,

     },
     field:{
         flex:1,
         fontSize:16,
         marginHorizontal:20,

     },
     fieldView:{
        height: Contansts.CONFIG.SCREEN_HEIGHT * 0.07,
        width: Contansts.CONFIG.SCREEN_WIDTH * 0.85,
        marginTop: 5,
        marginBottom: 10,
        borderColor: Colors.black,
        borderWidth:1,
        justifyContent:'center',
        backgroundColor: Colors.silver,

     },



 });
 export default CTextField;