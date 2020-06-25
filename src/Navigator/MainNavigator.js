import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from '../View/Onboarding/Login';
import AboutScreen from '../View/Onboarding/AboutScreen';
import WelcomeScreen from '../View/Onboarding/WelcomeScreen';
import TaskScreen from '../View/Onboarding/TaskScreen'
import RegisterScreen from '../View/register/Register';
import AppScreen from '../View/App/AppScreen';
import Colors from '../Config/Colors';
import SettingScreen from '../View/Setting/SettingScreen';
import Drawerr from '../../Drawer';
import {ContextLogin} from '../Config/Context';

function Menu2 (){

    return(
     <NavigationContainer independent={true}> 
      <DrawerScreen/>
    
    </NavigationContainer>
  
    
    );
  }
function Menu (){

    return(
     <NavigationContainer independent={true}> 
      <Drawerr/>
    
    </NavigationContainer>
  
    
    );
  }
  
const Stack = createStackNavigator();
const StackScreen = () => {
  return (
    <Stack.Navigator>
      
      
        <Stack.Screen
                name='login'
                component={LoginScreen}
                options={{headerShown: false}}              
                ></Stack.Screen>
        <Stack.Screen
                name='register'
                component={RegisterScreen}
                options={{title: 'Register Form',
                            headerStyle:{backgroundColor: Colors.red},
                            headerTintColor:Colors.white,
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                color:Colors.white,
                            },



            }}>              
                
                </Stack.Screen>
                
            <Stack.Screen
                name='Setting'
                component={SettingScreen}
                options={{title:'Settings'}}
                ></Stack.Screen>
            
            
                <Stack.Screen 
                name='Menu' 
                component={Menu}
                options={{headerShown: false}}>
                    
                </Stack.Screen>
                <Stack.Screen 
                name='Menu2' 
                component={Menu2}
                options={{headerShown: false}}>
                    
                </Stack.Screen>
                <Stack.Screen
                name='WelcomeScreen'
                component={WelcomeScreen}
                options={{headerShown: false}}
                WelcomeScreen
                >                   

                </Stack.Screen>
                <Stack.Screen
                name='AboutScreen'
                component={AboutScreen}
                options={{headerShown: false}}
                
                >  
                </Stack.Screen> 
                <Stack.Screen
                name='TaskScreen'
                component={TaskScreen}
                options={{headerShown: false}}
                
                >                   

                </Stack.Screen>
                
                
                <Stack.Screen
                name='App'
                component={AppScreen}
                options={{title:'App Main'}}
                >                   
                </Stack.Screen>               
            </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='App'
        component={AppScreen}
        options={{
          title: 'App Main',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
            fontSize: 25
          },
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{title: 'Settings'}}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Register'}}
      />
    </Drawer.Navigator>
  );
}


const mainNavigator = () => {
  const [isLogged, setIsLogged] = React.useState(false);
  const contextLogin = React.useMemo(() => {
    return {
      loginUser: () => {
        console.log('loginApp')
        setIsLogged(true);
      },
      logoutUser: () => {
        setIsLogged(false);
      }
    }
  });

  return (
      <NavigationContainer>
        
          <StackScreen />
        
          
      </NavigationContainer>
  );
}

export default mainNavigator;