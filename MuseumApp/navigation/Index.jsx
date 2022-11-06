import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

// screen
import WelcomeScreen from '../view/WelcomeScreen'
import LoginForm from '../view/LoginForm';
import JoinForm from '../view/JoinForm';
import JoinComp from '../view/JoinComp';
import Main from '../view/Index';

export default function Index(){
    return (
        <NavigationContainer>
            <StackNavi />
        </NavigationContainer>
    );
}

// 버튼 네비용
function StackNavi(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomNavi} options={{
                headerShown : false}}/>
            <Stack.Screen name="LoginForm" component={LoginForm} options={{
                headerShown : false}} />
            <Stack.Screen name="JoinForm" component={JoinForm} options={{
                headerShown : false}} />
            <Stack.Screen name="JoinComp" component={JoinComp} options={{
                headerShown : false}} />
        </Stack.Navigator>
    )
}

// 하부 네비용
function BottomNavi() {
    const Tab = createBottomTabNavigator();
    return(
            <Tab.Navigator
            initialRouteName={Main}
            screenOptions = {({ navigation }) => ({
                tabBarIcon: ({focused, size, color}) => {
                    let iconName;
                    if(navigation.name === 'home'){
                        iconName = focused? 'home' : 'home-outline';
                    }else if(navigation.name === 'profile'){
                        iconName = focused? 'person-circle-sharp' : 'person-circle-outlice';
                    }
                    return <Icon name={iconName} size={size} color={color} />
                },
                headerShown : false
            })}
            >
                <Tab.Screen
                name="home"
                component={Main}
                options={{
                    tabBarLabel: '홈',
                }}
                />
                <Tab.Screen
                name="profile"
                component={WelcomeScreen}
                options={{
                    tabBarLabel: '웰컴스크린',
                }}
                />
            </Tab.Navigator>
    )
}