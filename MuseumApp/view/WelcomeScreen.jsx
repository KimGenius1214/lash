import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PublicBtn from '../util/PublicBtn';

export default function WelcomeScreen({navigation}){
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

const styles = StyleSheet.create({
    container:{
        flex : 1, 
        padding: '2%',
    },
    titleWrapper:{
        flex : 2,
        justifyContent: 'flex-start'
    },
    title:{
        alignSelf: 'flex-start',
        marginTop: '10%',
        fontSize: 24,
        fontWeight: 'bold'
    },
    btnBox: {
        flex : 1,
        marginTop: 10,
        width: '100%'
    },
});
