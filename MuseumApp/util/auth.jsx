import { View, Text } from "react-native"
/**
 * @key "키 명칭" 
 * @value "키 벨류"
 */

export function Auth(userId, userPw, eqPassword){
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
    else return null
    // const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    // if(!regExp.test(userId)) return false
    // else return true

    // // 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
    // const regExp = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
    // if(!regExp.test(userPw)) return false
    // else return true
    
}

export function AuthLogin(userId, userPw){
    let authId = userId;
    let authPw = userPw;
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

    
    if(authId == '') return (
        <View>
            <Text> 이메일을 입력하세요. </Text>
        </View>
    )
    else if(!regExp.test(userId)) return (
        <View>
            <Text> 이메일의 형식이 맞지 않습니다. </Text>
        </View>
    )
    else if(authPw == '') return (
        <View>
            <Text> 비밀번호를 입력하세요. </Text>
        </View>
    )

    else return null
}