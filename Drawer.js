import React from 'react';
import {View, Text, Button, Image, Linking, StyleSheet, Alert} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import Dashboard from './screens/Dashboard';
import Messages from './screens/Messages';
import Contact from './screens/Contact';
import FirebasePlugin from './src/plugins/firebase/Firebase';

import {Feather,AntDesign} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
const Drawer= createDrawerNavigator();
const Stack =createStackNavigator();


const Screens=({navigation, style})=>{
    return(
    <Animated.View Animated style={StyleSheet.flatten([styles.stack,style])}>
    <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle:null,
        headerLeft: () =>(
            <Button  title='menu' onPress={()=> navigation.openDrawer()} icon={<Feather name='menu' size={18} />} >
               
                
            </Button>
        )
    }}>
            <Stack.Screen name='Dashboard' component={Dashboard}/>
            <Stack.Screen name='Messages' component={Messages}/>
            <Stack.Screen name='Contact' component={Contact}/>        
        </Stack.Navigator>
    </Animated.View>

    );


};
 const DrawerContent = props => {
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
     
    return(
        <DrawerContentScrollView {...props}>
            <View>
                <View style={styles.container} >
                    <Image source={{uri:'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png',
                        height:60,
                        width: 60,
                
                }}
                    resizeMode='center'
                    style={{borderRadius:30}}
                
                
                />
                <Text style={{marginTop:20,color:'white'}}> SmarthHome</Text>
                <Text style={{fontSize:9, marginBottom:20,color:'white'}} > Destrosaalmas1@gmail.com</Text>

                </View>
            <DrawerItem
                label ='Dashboard'
                labelStyle={{ marginLeft:-16,color:'white'}}
                onPress={()=> props.navigation.navigate('Dashboard')} 
                icon={()=> <AntDesign name='dashboard' color='white' size={16} /> }            
            />
            <DrawerItem
                label ='Settings'
                labelStyle={{marginLeft:-10,color:'white'}}
                onPress={()=> props.navigation.navigate('Messages')}   
                icon={()=> <AntDesign name='message' color='white' size={16} /> }           
            />
            <DrawerItem
                label ='Contact'
                labelStyle={{marginLeft:-16,color:'white'}}
                onPress={()=> props.navigation.navigate('Contact')}   
                icon={()=> <AntDesign name='phone' color='white' size={16} /> }           
            />
            </View>
            <View>
            <DrawerItem
                label ='LogOut'
                labelStyle={{marginLeft:-16,color:'white'}}
                onPress={()=> props.navigation.navigate('Contact')}   
                icon={()=> <AntDesign name='logout' color='white' size={16} /> }           
            />


            </View>


        </DrawerContentScrollView>


    );

 };
export default () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale =Animated.interpolate(progress,{
        inputRange:[0,1],
        outputRange:[1,0.8],

    });
    const borderRadius= Animated.interpolate(progress, {
        inputRange:[0,1],
        outputRange:[0,16],

    });
    const animatedStyle ={borderRadius,transform:[{scale}] };

    return(
        <LinearGradient style={{flex:1}} colors={['black','red']} >

        <Drawer.Navigator 
        drawerType='slide'
        overlayColor='transparent'
        initialRouteName='Dashboard' 
        drawerStyle={{width:'50%', backgroundColor:'transparent'}}
        contentContainerStyle={{flex:1}}
        drawerContentOptions={{
            activeBackgroundColor:"transparent",
            activeTintColor: "green",
            inactiveTintColor: "green"
        }}
        sceneContainerStyle={{backgroundColor:'transparent'}}
        drawerContent={props =>{
            setProgress(props.progress);
            return <DrawerContent {...props} />
        } }>
            <Drawer.Screen name='Screens'>
                {props => <Screens {...props} style={animatedStyle} />}
                
                
            </Drawer.Screen> 
        </Drawer.Navigator>
        </LinearGradient>
        


    );

};
const styles = StyleSheet.create({
    stack: {
        flex: 1,
        shadowColor: '#FFF',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5,
        // overflow: 'scroll',
        // borderWidth: 1,
      },
      drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
      drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
      drawerLabel: { color: 'white', marginLeft: -16 },
      avatar: {
        borderRadius: 60,
        marginBottom: 16,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
      },
    body:{
      flex:1,
      flexDirection:'column',
      
    },
    container:{
      flex:1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    box:{
      
      flex:0.4,
      marginBottom:20,     

    }
  });
