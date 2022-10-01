import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JoinForm from './view/JoinForm';
import PublicBtn from './util/PublicBtn';

const Stack = createNativeStackNavigator();


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function WelcomeScreen({navigation}){
    return (
        <View style ={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text>Title</Text>
            <View style={styles.btnBox}>
                <PublicBtn title='Sign in' />
                <PublicBtn title='Sign up' onPress={() => navigation.navigate('JoinForm')} />
{/*                 <Button title="Sign up" /> */}
            </View>
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


const App: () => Node = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="JoinForm" component={JoinFormScreen} />
            </Stack.Navigator>
        </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
});

export default App;
