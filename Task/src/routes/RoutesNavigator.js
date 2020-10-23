import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing Drawer content
import DrawerContent from '../screens/Drawer/DrawerContent';

// importing screen
import Dashboard from '../screens/Dashboard/Dashboard';
import Appointment from '../screens/Appointment/Appointment';

const AuthStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator headerMode="none" initialRouteName='Login'>
            <AuthStack.Screen name='Login' component={Login} />
            <AuthStack.Screen name='HomeStack' component={DrawerScreen} />
        </AuthStack.Navigator>
    )
}

const DashboardStackScreen = () => {
    return (
        <DashboardStack.Navigator headerMode="none">
            <DashboardStack.Screen name="Dashboard" component={Dashboard} />
            <DashboardStack.Screen name="Appointment" component={Appointment} />
        </DashboardStack.Navigator>
    )
}

const DrawerScreen = () => {
    return (
        <Drawer.Navigator
            drawerType="front"
            drawerContent={props => <DrawerContent {...props} />}
            drawerContentOptions={{
                activeTintColor: '#e91e63',
            }}
        >
            <Drawer.Screen name="DashboardStack" component={DashboardStackScreen} />
            <Drawer.Screen name="Appointment" component={Appointment} />
        </Drawer.Navigator>
    );

}

const RoutesNavigator = () => {
    // const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    const isUserSignedIn = useSelector(state => state.loginReducer.isUserLoggedIn)

    return (
        <NavigationContainer>
            {isUserSignedIn ?
                <DrawerScreen />
                : <AuthStackScreen />
            }
        </NavigationContainer>
    );
};

export default RoutesNavigator;
