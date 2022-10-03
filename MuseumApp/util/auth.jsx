import { useState } from "react";
import { View, Text } from "react-native"
/**
 * userId, Pw 검증과 비밀번호 일치 여부 관리
 */

export default function Auth(userId, userPw, eqPassword){
    const [isChecked, setIsChecked] = useState(false);

    let authId = userId;
    let authPw = userPw;
    let authEq = eqPassword;
    
    if(authId == '') return (
        <View>
            <Text> 아이디를 입력하세요. </Text>
        </View>
    )
    else if(authPw == '') return (
        <View>
            <Text> 비밀번호를 입력하세요. </Text>
        </View>
    )
    else if(authPw != authEq) return(
        <View>
            <Text> 비밀번호가 일치하지 않습니다. </Text>
        </View>
    )
    const regId = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    if(!regId.test(userId)){} setIsChecked(false)
    
    // 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
    const regPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
    if(!regPw.test(userPw)) setIsChecked(false)
    
    if(isChecked) return null;
    
}