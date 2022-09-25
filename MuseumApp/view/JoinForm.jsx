import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import PublicBtn from '../util/PublicBtn';
import Auth from "../util/auth";

export default function JoinForm(){
    const [authEmail, setAuthEmail] = useState('');
    const [authPw, setAuthPw] = useState('');
    const [eqPassword, setEqPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const authChange = (key, e) => {
        setIsChecked(false)
        if(key === 'email') {
            let value = e.text
            setAuthEmail(value)
            const result = Auth(key, value)
            if(!result) setMsg('이메일을 정확히 입력해주세요.')
            isChecked(true)
        }
        else if(key === 'password'){
            let value = e.text
            setAuthPw(value)
            const result = Auth(key, value)
            if(!result) setMsg('비밀번호를 정확히 입력해주세요.')
            isChecked(true)
        }
        else if(key === 'eqPassword'){
            let value = e.text
            setEqPassword(value)
            if(authPw != value) setMsg('비밀번호가 일치하지 않습니다.')
            isChecked(true)
        }
    }

    return(
        <View style={styled.container}>
            <TextInput
            name="email"
            style={styled.inputBox}
            placeholder="이메일을 입력하세요"
            onChange={(e) => authChange("email", e.nativeEvent)}
            value={authEmail}
            />
            <TextInput
            name="password"
            style={styled.inputBox}
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => authChange("password", e.nativeEvent)}
            />
            <TextInput
            name="eqPassword"
            style={styled.inputBox}
            placeholder="비밀번호를 한번 더 입력하세요"
            onChange={(e) => authChange("eqPassword", e.nativeEvent)}
            />
            <Text>{msg}</Text>
            <View style={styled.btnBox}>
                <PublicBtn title='추가' onPress={authChange} />
                <PublicBtn title='초기화' onPress={authChange} />
            </View>
        </View>
    )
}

const styled = StyleSheet.create({
    container : {
        flex: 1,
        width: '85%',
        alignSelf: 'center'
    },
    inputBox: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
})