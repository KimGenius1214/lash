import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import PublicBtn from '../util/PublicBtn';
import { AuthLogin } from "../util/Auth";

export default function LoginForm() {

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
      <View style={styles.TextInputWrapper}>
        <Text style={styles.text}>이메일</Text>
        <TextInput
          name="userId"
          style={styles.inputBox}
          placeholder="이메일을 입력하세요"
          onChangeText={e => authChange("userId", e)}
        />
        <Text style={styles.text}>비밀번호</Text>
        <TextInput
          name="userPw"
          style={styles.inputBox}
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
            else if(result == null) console.log('로그인 완료')
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
        backgroundColor: '#daedff95',
    },
    TextInputWrapper:{
        flex : 1,
        justifyContent: 'flex-end'
    },
    text:{
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    inputBox: {
        width: '100%',
        height: 50,
        backgroundColor: '#fcfcfc93',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    btnBox: {
        flex : 1,
        marginTop: 50,
        width: '100%'
    },
});