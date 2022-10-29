import { View, Text, StyleSheet } from "react-native"
/**
 * userId, Pw 검증과 비밀번호 일치 여부 관리
 */
export function Auth({authCheck}){

    const { userId, userPw, eqPassword, name, phone } = authCheck;

    const regId = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    // 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
    const regPw = /(?=.*\d{1,50})(?=.*[.,~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;

    //이름을 입력하세요.
    if(name == '') return 0
    //이메일을 입력하세요.
    else if(userId == '') return 1
    //이메일을 확인하세요.
    else if(!regId.test(userId)) return 2
    //비밀번호를 입력하세요.
    else if(userPw == '') return 3
    //비밀번호가 일치하지 않습니다.
    // else if(userPw != eqPassword) return 4
    //비밀번호 형식을 확인하세요.
    else if(!regPw.test(userPw)) return 5
    //휴대폰 번호를 입력하세요.
    else if(phone == '') return 6
    else return null;
}

export function AuthLogin(userId, userPw){
    let authId = userId;
    let authPw = userPw;
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

    if(authId == '') return (
        <View>
            <Text style={styles.errorMsg}> 이메일을 입력하세요. </Text>
        </View>
    )
    else if(!regExp.test(authId)) return (
        <View>
            <Text style={styles.errorMsg}> 이메일의 형식이 맞지 않습니다. </Text>
        </View>
    )
    else if(authPw == '') return (
        <View>
            <Text style={styles.errorMsg}> 비밀번호를 입력하세요. </Text>
        </View>
    )

    else return null
}

const styles = StyleSheet.create({
    errorMsg:{
        color : '#ff0000',
        fontSize : 14
    }
});