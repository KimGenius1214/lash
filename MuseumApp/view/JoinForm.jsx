import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import PublicBtn from '../util/PublicBtn';
import Auth from "../util/auth";

export default function JoinForm(){
    const [authEmail, setAuthEmail] = useState('');
    const [authPw, setAuthPw] = useState('');
    const [msg, setMsg] = useState('');

    const authChange = (keyvalue, e) => {
        if(keyvalue === 'email') {
            setAuthEmail(e.Text)
            const result = Auth(keyvalue, e)
            if(!result) setMsg('꺼져')
            else setMsg('됐어')
        }
        else if(keyvalue === 'password'){
            const result = Auth(keyvalue, e)
            return console.log(result)
        }
    }

    return(
        <View>
            <TextInput
            name="email"
            placeholder="이메일을 입력하세요"
            onChange={(e) => authChange("email", e.nativeEvent)}
            value={authEmail}
            />
            <Text>{msg}</Text>
            <TextInput
            name="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => authChange("password", e.nativeEvent)}
            />
            <View>
                <PublicBtn title='추가' onPress={authChange} />
                <PublicBtn title='초기화' onPress={authChange} />
            </View>
        </View>
    )
}