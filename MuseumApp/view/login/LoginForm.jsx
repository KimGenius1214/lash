import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import PublicBtn from '../../util/PublicBtn';
import { AuthLogin } from "../../util/Auth";
import Login from '../../util/Login';

export default function LoginForm({navigation}) {

  const [authCheck, setAuthCheck] = useState({
    userId : '',
    userPw : '',
  });
  const [msg, setMsg] = useState('');

  const authChange = (name, e) => {
    setAuthCheck({
      ...authCheck,
      [name] : e
    })
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputWrapper}>
        <Text style={styles.text}>이메일</Text>
        <TextInput
          name="userId"
          style={styles.inputBox}
          placeholder="이메일을 입력하세요"
          onChangeText={e => authChange("userId", e)}
          autoFocus
        />
        <Text style={styles.text}>비밀번호</Text>
        <TextInput
          name="userPw"
          style={styles.inputBox}
          secureTextEntry={true}
          placeholder="비밀번호를 입력하세요"
          onChangeText={e => authChange("userPw", e)}
        />
      <Text>{msg}</Text>
      </View>
      <View style={styles.btnBox}>
        <PublicBtn title="Login" 
          onPress={() => {
            const result = AuthLogin(authCheck.userId, authCheck.userPw);
            if(result != null) setMsg(result)
            else if(result == null) {
              // 확인용, 추후 로그인 상태 페이지 작성 예정
              Login(authCheck).then(res => console.log(res))
            }
          }} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height : '100%',
        alignSelf: 'center',
        padding: '2%',
    },
    textInputWrapper:{
        flex: 2,
        justifyContent: 'center',
        paddingTop: 50,
        marginBottom: 50
    },
    text:{
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    inputBox: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    btnBox: {
        flex : 1,
        width: '100%'
    }
});