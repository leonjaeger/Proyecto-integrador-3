import React, { Component, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart, Path } from 'react-native-svg-charts'
import MQTTConnection from '../../core/mqttConextion';
import {Buffer} from 'buffer';
global.Buffer= Buffer;
import Colors from '../../src/Config/Colors';
import App from '../../core/app';

import * as theme from '../components/theme';
import  Text  from '../components/Text';
import Block from '../components/block'
import mocks from '../components/mocks';
import FirebasePlugin, { database } from '../../src/plugins/firebase/Firebase';
import AwesomeAlert from 'react-native-awesome-alerts';




//const [estado, setEstado] = useState(false);
class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      estadolight:false,
      estadoAC:false,
      estadoTemp:false,
      estadoFan:false,
      estadoWifi:false,
      date: '',
      showAlert:false,
    };
    
    
    this.boton=this.boton.bind(this);
    this.boton2=this.boton2.bind(this);
    this.boton3=this.boton3.bind(this);
    this.boton4=this.boton4.bind(this);
    this.boton5=this.boton5.bind(this);
  }
  

  

  static navigationOptions = {
    header: null
  }
  
  
  
  showAlert=()=>{
    this.setState({
      showAlert:true

    });


  };
  hideAlert=()=>{
    this.setState({
      showAlert:false
    });


  };
boton = () => {
  const refe= database.ref('/');
  const hist= database.ref('/historial');
  this.setState({estadolight:!this.state.estadolight})
  refe.update({
    ligth:this.state.estadolight,
    encendido:0,
  });
  hist.update({
    usoligth: this.state.date,
    })  
  console.log('Luces: ', this.state.estadolight);
  console.log('tiempo de uso: ',this.state.date);
        
}
boton2 = () => {
  const refe= database.ref('/');
  const hist= database.ref('/historial');
  this.setState({estadoAC:!this.state.estadoAC})
  refe.update({
    ac:this.state.estadoAC,
    encendido:0,
  });
  hist.update({
    usoAC: this.state.date,
    })
  console.log('Aire acondicionado: ',this.state.estadoAC);
  console.log('tiempo de uso: ',this.state.date);
}
boton3 = () => {
  const refe= database.ref('/');
  const hist= database.ref('/historial');
  this.setState({estadoTemp:!this.state.estadoTemp})
  refe.update({
    temp:this.state.estadoTemp,
    encendido:0,

  })
  hist.update({
    usoTemp: this.state.date,
    })
  console.log('Sensor temperatura: ', this.state.estadoTemp);
  console.log('tiempo de uso: ',this.state.date);
}
boton4 = () => {
  const refe= database.ref('/'); 
  const hist= database.ref('/historial');
  this.setState({estadoFan:!this.state.estadoFan})
  refe.update({
    fan:'encendido',
    encendido:0,

  })
  hist.update({
    usoFan: this.state.date,
    })
  console.log('Ventilador: ' ,this.state.estadoFan);
  console.log('tiempo de uso: ',this.state.date);
}
boton5 = () => {
  const refe= database.ref('/');
  const hist= database.ref('/historial');
  this.setState({estadoWifi:!this.state.estadoWifi})
  refe.update({
    wifi:this.state.estadoWifi,
    encendido:0,

  })
  hist.update({
    usoWifi: this.state.date,
    })
  console.log('Wifi: ',this.state.estadoWifi);
  console.log('tiempo de uso: ',this.state.date);
}
componentDidMount() {
  var that = this;
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  that.setState({
    //Setting the value of the date time
    date:
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
  });
}




  render() {
    const {  mocks } = this.props;
    let mether;
    const LightIcon = mocks['light'].icon;
    const ACIcon = mocks['ac'].icon;
    const TempIcon = mocks['temperature'].icon;
    const FanIcon = mocks['fan'].icon;
    const WiFiIcon = mocks['wi-fi'].icon;
    const ElectricityIcon = mocks['electricity'].icon;
    const emailU = FirebasePlugin.auth().currentUser.email;
    database.ref('metro').on('value',snapshot=>{mether=snapshot.val()});
    const metro=database.ref('metro').on('value',snapshot=>{console.log('user data: ', snapshot.val());});

    
     
    

    
    

   

    return (
      
      <Block style={styles.dashboard}>
        <Block column style={{ marginVertical: theme.sizes.base * 2, }}>
          <Text welcome>Hello</Text>
           <Text>{this.state.date}</Text>
    <Text name>{emailU}</Text>
        </Block>
        
        <Block  style={{ paddingVertical: 10 }}>
          <Block  row style={{ alignItems: 'flex-end', }}>
    <Text h1>{mether}</Text>
            <Text h1 size={34} height={80} weight='600' spacing={0.1}>°C</Text>
          </Block>
          <Block  column>
            <Text caption>Humidity</Text>
            <LineChart
              yMax={100}
              yMin={0}
              data={[0, 20, 25, 15, 20, 55, 60]}
              style={{ flex: 0.8 }}
              
              svg={{ stroke: theme.colors.accent, strokeWidth: 3 }}
            />
          </Block>
        </Block>

        <ScrollView contentContainerStyle={styles.buttons} showsVerticalScrollIndicator={false}>
          <Block column space="between">
              <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
                <TouchableOpacity  activeOpacity={0.8}
                onPress={() => this.boton()}
                >
                    <Block center middle style={styles.button}>
                    
                    <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                      light
                    
                    </Text>
                    </Block>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.8}
                onPress={() => this.boton2()}>
                    <Block center middle style={styles.button}>
                    <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    AC
                  </Text>
                    </Block>
                </TouchableOpacity>
              </Block>
              <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.boton3()}
              >
                <Block center middle style={styles.button}>
                  
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    temperature
                  </Text>
                </Block>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.boton4()}
              >
                <Block center middle style={styles.button}>
                  
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    fan
                  </Text>
                </Block>
              </TouchableOpacity>
              </Block>
              <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.boton5()}
              >
                <Block center middle style={styles.button}>
                  
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    wi-fi
                  </Text>
                </Block>
              </TouchableOpacity>
              
              
              
            </Block> 
          </Block>
        </ScrollView>
      </Block>
    )
  }
}


Dashboard.defaultProps = {
    mocks: mocks,
  }
export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: theme.sizes.base * 2,
    marginBottom: -theme.sizes.base * 6,
  },
  buttons: {
    flex: 1,
    marginBottom: -theme.sizes.base * 6,
  },
  button: {
    backgroundColor: Colors.silver,
    width: 151,
    height: 151,
    borderRadius: 151 / 2,
  }
})