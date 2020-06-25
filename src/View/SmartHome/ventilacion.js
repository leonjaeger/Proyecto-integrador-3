import React, {Component}from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ButtonLogin from '../../Components/Smarthome/Button';
import Casosinput from '../../Components/Smarthome/TextInput';
import CVciudad from '../../Components/Smarthome/CVcui';
import LogoLogin from '../../Components/Smarthome/CVlogo';
import Constants from '../../Config/constants';
import Colors from '../../Config/Colors';
import imgUsername from '../../../src/img/background.jpg';
import ciudades from '../../Config/ciudades';

export default class Ventilacion extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''

        };
        this._onPress=this._onPress.bind(this);
        this._onChangeTextusername=this._onChangeTextusername.bind(this);
        this._onChangeTextPassword=this._onChangeTextPassword.bind(this);
    }
    _onPress(){
        console.log('button pressed!!');
        console.log (this.state.username);
        console.log(this.state.password);


    }
    _onChangeTextusername(username){
        this.setState({
            username: username,
        });

    }
    _onChangeTextPassword(password){
        this.setState({
            password:password,

        });

    }
    render(){
        return(
            <View style={stylesVentilacion.container}>
                <LogoLogin style={stylesVentilacion.logo}></LogoLogin>
                <View style={stylesVentilacion.form}>

                    <CVciudad
                    onChangeText={this._onChangeTextusername}
                    Ciudad={Constants.MODOVEN} 
                    placeholder={Constants.AUTOMATICO}
                    placeholder2={Constants.ENCENDER}  
                    
                    
                    securetextEntry={false}
                    autoCorrect={false}                    
                    
                    />


                    <CVciudad
                    onChangeText={this._onChangeTextusername}
                    Ciudad={Constants.MODOVEN2}   
                    placeholder={Constants.ABRIR}
                    placeholder2={Constants.CERRAR}  
                    
                    
                    securetextEntry={false}
                    autoCorrect={false}                    
                    
                    />
                    
                    
                    
                    <Text 
                    style={stylesVentilacion.texto}
                    
                    >Grafica de temperatura</Text>
                    <ButtonLogin
                        onPress={this._onPress}
                        titleButton={Constants.CALCULAR}/>
                    
                </View>
                <View style={stylesVentilacion.formArea}>          

                    
                    
                    
                    
                    
                </View>
                <ButtonLogin
                        onPress={this._onPress}
                        titleButton={Constants.CARGA}/>
                
            </View>


        );
    }



}
const stylesVentilacion = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.black,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      flex: 1,
      width: '100%',
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      width: '80%',
      marginTop:100,
    },
    border: {
        flex: 1,
        backgroundColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      formArea: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
        marginTop:100,
        backgroundColor: Colors.white,
        
      },
      texto:{

        borderColor:Colors.white,
        color:'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        
        
    },
  });