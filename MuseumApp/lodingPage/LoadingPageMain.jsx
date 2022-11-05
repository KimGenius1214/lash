import { View, Text, StyleSheet, Image } from 'react-native';

export default function LoadingPageMain(){

    return(
        <View style={styled.container}>
            <View style={styled.bodyContainer}>
                <Image source={require('../image/inging.gif')} style={styled.imgStyle} />
                <Text style={styled.textStyle}>The Museum Project</Text>
            </View>
        </View>
    )
}

const styled = StyleSheet.create({
    container : {
        flex: 1,
        alignSelf: 'center',
    },
    bodyContainer: {
        height: '100%',
        justifyContent: 'center'
    },
    imgStyle:{
        width: 300,
        height: 300
    },
    textStyle:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 25
    }
})