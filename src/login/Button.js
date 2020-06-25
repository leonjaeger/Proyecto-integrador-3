import React, {Component} from 'react';
import {StyleSheet, View, Text, Button,TouchableOpacity} from 'react-native';


export default class Buton extends Component{
constructor(props){
    super(props);
    
this._onPress =this._onPress.bind(this);
    

}
_onPress(){

  console.log('Click button !!!');
  console.log(this.props.pass);
  console.log(this.props.username);
  const num1=this.props.num1;
  const num2=this.props.num2;
  const resp =num1+num2;
  console.log(num1);
  console.log(num2);
  console.log(resp);
}

render(){
    return(
        <View>
            <TouchableOpacity style={stylesButton.button }onPress={this._onPress}>
                <Text style={stylesButton.text}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    );
}

}
const stylesButton = StyleSheet.create({
    container: {
      flex: 1,
      top: -95,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F035E0',
      height: 50,
      borderRadius: 20,
      zIndex: 100,
    },
    circle: {
      height: 50,
      width: 50,
      marginTop: 50,
      borderWidth: 1,
      borderColor: '#F035E0',
      borderRadius: 100,
      alignSelf: 'center',
      zIndex: 99,
      backgroundColor: '#F035E0',
    },
    text: {
      color: 'white',
      backgroundColor: 'transparent',
    },
    image: {
      width: 24,
      height: 24,
    },
  });