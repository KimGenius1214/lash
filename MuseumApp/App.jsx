import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PublicBtn from './util/PublicBtn';
import LoginForm from './view/LoginForm';
import JoinForm from './view/JoinForm';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Stack = createNativeStackNavigator();

function WelcomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>제목이 들어갈 자리</Text>
            </View>
            <View style={styles.btnBox}>
                <PublicBtn title="Sign in" onPress={() => navigation.navigate('LoginForm')}/>
                <PublicBtn title="Sign up" onPress={() => navigation.navigate('JoinForm')} />
            </View>
        </View>
    )
}

function LoginFormScreen({navigation}){
    return(
        <View>
            <LoginForm />
        </View>
    )
}

function JoinFormScreen({navigation}){
    return(
        <View>
            <JoinForm />
        </View>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions = {{headerShown: false}}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="LoginForm" component={LoginFormScreen} />
                <Stack.Screen name="JoinForm" component={JoinFormScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container:{
        flex : 1, 
        width: '100%',
        alignSelf: 'center',
        padding: '2%',
        backgroundColor: '#daedff95',
    },
    titleWrapper:{
        flex : 2,
        justifyContent: 'flex-start'
    },
    title:{
        alignSelf: 'flex-start',
        marginTop: '10%',
        color: "#646464",
        fontSize: 24,
        fontWeight: 'bold'
    },
    btnBox: {
        flex : 1,
        marginTop: 10,
        width: '100%'
    },
});

export default App;
