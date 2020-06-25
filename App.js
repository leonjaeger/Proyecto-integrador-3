import React ,{Component} from 'react';
import { YellowBox, StyleSheet, View, Text } from 'react-native'
import Onboarding from './srcc';
import MainNavigator from '../ok/src/Navigator/MainNavigator';
import{decode,encode} from 'base-64';

if(!global.btoa){global.btoa=encode}
if (!global.atob){global.atob=decode}




export default class App extends Component {
  render() {
    return (
      <MainNavigator></MainNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});