import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Index from './navigation/Index'

const App = () => {
    return (
        <SafeAreaView style={styled.container}>
            <Index />
        </SafeAreaView>
    );
};

const styled = StyleSheet.create({
    container: {
        flex : 1,
        width: '90%',
        alignSelf: 'center',
    }
})


export default App;
