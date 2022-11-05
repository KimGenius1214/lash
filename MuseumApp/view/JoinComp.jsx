import { View, Text, StyleSheet, Image } from "react-native";
import PublicBtn from "../util/PublicBtn";

export default function JoinComp({navigation}){

    return(
        <View style={styled.container}>
            <View style={styled.complet}>
                <Image style={styled.ellipse} source={require('../image/Firecracker.png')} />
                <Text style={styled.textArea}>Museum Famliy가 되신 것을 환영해요 !</Text>
            </View>
            <View style={styled.btnView}>
                <PublicBtn title='확인' onPress={() => navigation.navigate('WelcomeScreen')}/>
            </View>
        </View>
    )
}

const styled = StyleSheet.create({
    container: {
        flex: 1,
    },
    complet:{
        flex: 2,
        alignItems: 'center'
    },
    ellipse:{
        flex: 1,
        alignContent: 'center',
        borderRadius: 100,
        width: 150,
        maxHeight: 150,
        marginTop: '60%'
    },
    textArea: {
        flex: 1,
        marginTop: 30
    },
    btnView: {
        flex: 0.2,
        width: '90%',
        alignSelf: 'center'
    }
})