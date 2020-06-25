import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import Dashboard from '../../SmartHome/screens/Dashboard';
import Settings from '../../SmartHome/screens/Settings';

export default createStackNavigator({

    Dashboard,
    Settings,
},{
    initialRouteName:'Dashboard'
});