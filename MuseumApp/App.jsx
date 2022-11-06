import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoadingPageMain from './lodingPage/LoadingPageMain';
import Index from './navigation/Index';

const App = () => {
    const [loading, setLoading] = useState(false);

    (async() => {
        setTimeout(() => {setLoading(true)}, 3000)
    })()

    if(!loading) return <LoadingPageMain />
    else{
        return (
            <SafeAreaView style={styled.container}>
                <Index />
            </SafeAreaView>
        );
    }
};

const styled = StyleSheet.create({
    container: {
        flex : 1,
        width: '100%',
        alignSelf: 'center',
    }
})

export default App;
