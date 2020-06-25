import {Dimensions} from 'react-native';

const config={
    
    HEADER_HEIGHT: Dimensions.get('window').height-45,
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,


};
const strings={
    NAME_APP: 'SmartHome',
  PASSWORD: 'Password',
  USERNAME: 'Username',
  TITLE_BUTTON: 'LOG IN',
  REGISTER: 'Register',
  EMAIL: 'Email',
  EMAIL_ERROR: 'Email invalid!',
  PASSWORD_ERROR: 'Password invalid!',
  EMPTY_TITLE: 'Review Email/Password values',
  EMPTY_VALUES: 'Empty values detected',
  ADD_EMAIL: 'Enter Email',
  ADD_EMAIL_BUTTON: 'ADD',

};
export default{
    CONFIG:config,
    STRING:strings,
PASSWORD:'Password',
USERNAME:'Usuario',
TITLE_BUTTON:'Ingresar',
SOSPECHA:'Casos sospechosos',
CONFIRMA:'Casos Confirmados',
CALCULAR:'Calcular',
BUSQUEDA:'Ingrese busqueda',
MAX:'Maximo de casos',
CARGA: 'Reload',
AUTOMATICO:'Ciclo automatico',
ENCENDER:'Encendido',
APAGAR:'Apagado',
ABRIR:'Abrir',
CERRAR:'Cerrar',
nro:'nro de casos',

MODOVEN:'Sistema de ventlacion',
MODOVEN2:'Operacion de persianas',



}