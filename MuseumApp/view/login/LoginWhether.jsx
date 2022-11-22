import { Text, View, StyleSheet } from 'react-native';
import PublicBtn from '../../util/PublicBtn';

export function OkToken({name}) {
    return(
        <View style={styled.topBoard}>
            <Text>{name}님 반가워요</Text>
            <Text>이미지 넣는곳</Text>
        </View>
    )
}

export function NotToken({navigation}) {
    return(
        <View style={styled.topBoard}>
            <Text style={{textAlignVertical: 'center'}} onPress={() => navigation.navigate('JoinForm')}>회원 가입을 하시겠어요?</Text>
            <View style={{width: '20%'}}>
                <PublicBtn title="로그인" onPress={() => navigation.navigate('LoginForm')} />
            </View>
        </View>
    )
}

const styled = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
    topBoard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        paddingVertical: '2%'
    },
})