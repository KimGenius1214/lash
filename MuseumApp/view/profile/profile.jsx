import { View, Text, StyleSheet } from "react-native"
import { useRecoilState } from "recoil";
import PublicBtn from "../../util/PublicBtn"
import { userState } from '../../component';
import { useEffect } from "react";

export default function Profile({navigation}){
    const [user, setUser] = useRecoilState(userState)
    
    useEffect( () => {
        console.log(user)
        if(user === null) navigation.navigate('home')
    }, [user])

    return(
        <View style={styled.container}>
            <View>
                <PublicBtn title='logout' onPress={() => {
                    setUser(null)
                }}>로그아웃</PublicBtn>
            </View>
        </View>
    )
}

const styled = StyleSheet.create({
    container : {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    btnBox : {
        flex: 1,
        width: '100%',
        borderBottomWidth: 1,
    }
})