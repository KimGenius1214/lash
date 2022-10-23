import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, StyleSheet } from 'react-native';
import PublicBtn from '../util/PublicBtn';
import { Auth } from '../util/Auth';
import Join from '../util/Join';

export default function JoinForm({navigation}) {
  const [authCheck, setAuthCheck] = useState({
    userId : '',
    userPw : '',
    eqPassword : ''
  });
  const [msg, setMsg] = useState('');

  const authChange = (key, e) => {
    const value = e.text;
    setAuthCheck({
      ...authCheck,
      [key] : value
    })
  };

  return (
    <SafeAreaView style={styled.container}>
      <View style={styled.textInputWrapper}>
        <Text style={styled.textBox}>아이디(이메일)</Text>
        <TextInput
          name="email"
          style={styled.inputBox}
          placeholder="이메일을 입력하세요"
          onChange={e => authChange('userId', e.nativeEvent)}
        />
        <Text style={styled.textBox}>비밀번호</Text>
        <TextInput
          name="password"
          style={styled.inputBox}
          placeholder="비밀번호를 입력하세요"
          secureTextEntry={true}
          onChange={e => authChange('userPw', e.nativeEvent)}
        />
        <Text style={styled.textBox}>비밀번호 확인</Text>
        <TextInput
          name="eqPassword"
          style={styled.inputBox}
          placeholder="비밀번호를 한번 더 입력하세요"
          secureTextEntry={true}
          onChange={e => authChange('eqPassword', e.nativeEvent)}
        />
        <Text style={styled.textBox}>휴대폰 번호</Text>
        <View
        style={styled.phoneNumber}>
          <Text 
          name="firstNumber"
          style={styled.numberBox}
          >
            010
          </Text>
          <Text
            style={styled.center}> - </Text>
          <TextInput 
          name="middleNumber"
          style={styled.numberBox}
          maxLength={4}
          />
          <Text
            style={styled.center}> - </Text>
          <TextInput 
          name="lastNumber"
          style={styled.numberBox}
          maxLength={4}
          />
        </View>
        <Text style={styled.textBox}>{msg}</Text>
      </View>
      <View style={styled.btnBox}>
        <PublicBtn title="회원가입" onPress={() => {
          const result = Auth(authCheck.userId, authCheck.userPw, authCheck.eqPassword)
          if(result != null) setMsg(result)
          else if(result == null) Join(authCheck.userId, authCheck.userPw)
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styled = StyleSheet.create({
  container: {
    width: '100%',
    height : '100%',
    padding: '2%',
    alignSelf: 'center',
  },
  textInputWrapper:{
      flex : 5,
      paddingTop : 10,
      marginBottom : 50
  },
  inputBox: {
    borderBottomWidth: 1,
    width: '100%',
    height: 40,
    alignItems: 'center',
  },
  btnBox: {
    flex: 1,
    marginTop: 10,
    width: '100%'
  },
  phoneNumber: {
    flexDirection: 'row',
  },
  numberBox:{
    width: 85,
    height: 40,
    borderBottomWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  center: {
    alignSelf: 'center',
  },
  textBox: {
    marginTop: 10 
  }
});
