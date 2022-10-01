import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import PublicBtn from '../util/PublicBtn';

export default function LoginForm() {
  
  // const [msg, setMsg] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.TextInputWrapper}>
        <Text style={styles.text}>이메일</Text>
        <TextInput
          name="email"
          style={styles.inputBox}
          placeholder="이메일을 입력하세요"
          // onChange={e => authChange('userId', e.nativeEvent)}
        />
        <Text style={styles.text}>비밀번호</Text>
        <TextInput
          name="password"
          style={styles.inputBox}
          placeholder="비밀번호를 입력하세요"
          // onChange={e => authChange('userPw', e.nativeEvent)}
        />
      {/* <Text>{msg}</Text> */}
      </View>
      <View style={styles.btnBox}>
        <PublicBtn title="Login" 
        // onPress={() => {}} 
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