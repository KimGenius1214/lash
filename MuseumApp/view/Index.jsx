import { Text, View, ScrollView, StyleSheet, TextInput, Image } from 'react-native';
import { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import PublicBtn from '../util/PublicBtn';
import axios from 'axios';
import { LoginTest } from '../view/login/LoginForm'

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

export default function Index({navigation}){
    const login = useContext(LoginTest);
    // const [inToken, setToken] = useState(false);
    console.log(login)

    return(
        <ScrollView style={styled.container}>
            { login === '' ? <NotToken navigation={navigation} /> : <OkToken name={login}/> }
            <View style={styled.searchBoard}>
                <Icon name="search1" size={25} color="black" style={{alignSelf:'center'}} />
                <TextInput placeholder='행사정보/커뮤니티/매장/혜택·이벤트/커머스/온라인 전시관' style={styled.placeHolderStyle} />
            </View>
            <View style={styled.filterBoard}>
                <Text>라승현님께 추천해요 !</Text>
                <View style={styled.plusBoard}>
                    <Text>필터 설정</Text>
                    <Icon name="plussquareo" size={25} color="black" style={{alignSelf:'center', marginLeft:5}} />
                </View>
            </View>
            <View style={styled.mainBoard}>
                <Image source={require('../image/poster1.png')} style={{width: '100%', height: '100%', resizeMode: 'contain'}}/>
            </View>
            <View style={styled.subBoard}>
                <Icon name="leftcircleo" size={25} color="black" style={{alignSelf:'center'}} />
                <View style={styled.subImgBoard}></View>
                <View style={styled.subImgBoard}></View>
                <View style={styled.subImgBoard}></View>
                <Icon name="rightcircleo" size={25} color="black" style={{alignSelf:'center'}} />
            </View>
            <View style={styled.hotMatch}>
                <View style={styled.hotMatchBoard}>
                    <Text style={{textAlign:'center'}}>커뮤니티 탑 3 게시물</Text>
                    <View style={styled.viewImg}>
                    </View>
                </View>
                <View style={styled.hotMatchBoard}>
                    <Text style={{textAlign:'center'}}>
                    매칭 진행
                    </Text>              
                    <View style={styled.viewImg}>
                    </View>
                </View>
            </View>
        </ScrollView>
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
    searchBoard: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 50,
        height: 40,
        width: '95%',
        alignSelf: 'center',
        paddingLeft: '5%',
    },
    placeHolderStyle: {
        fontSize: 10,
        marginLeft: '5%',
    },
    filterBoard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 30,
        margin: 15,
        alignItems: 'center'
    },
    plusBoard:{
        flexDirection: 'row',
    },
    mainBoard: {
        width: '95%',
        height: 300,
        alignSelf: 'center',
        backgroundColor: '#d9d9d9'
    },
    subBoard:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignSelf:'center',
        width: '95%',
        height: 150,
        marginTop: '2%'
    },
    subImgBoard:{
        width: '25%',
        height: '100%',
        backgroundColor: '#d9d9d9',
    },
    hotMatch:{
        flexDirection: 'row',
        marginTop: '2%',
        width: '95%',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    hotMatchBoard: {
        width: '45%',
        backgroundColor: '#d9d9d9'
    },
    viewImg: {
        width: '100%',
        height: 300,
        backgroundColor: '#d9d9d9'
    },
    btnBox: {
        flex : 1,
        marginTop: 10,
    },
})