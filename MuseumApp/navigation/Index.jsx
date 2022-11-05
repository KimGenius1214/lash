import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../view/WelcomeScreen'
import LoginForm from '../view/LoginForm';
import JoinForm from '../view/JoinForm';
import JoinComp from '../view/JoinComp';
import Main from '../view/Index';

export default function Index(){
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main' screenOptions = {{headerShown: false}}>
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="LoginForm" component={LoginForm} />
                <Stack.Screen name="JoinForm" component={JoinForm} />
                <Stack.Screen name="JoinComp" component={JoinComp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}