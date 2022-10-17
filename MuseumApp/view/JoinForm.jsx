import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, StyleSheet } from 'react-native';
import PublicBtn from '../util/PublicBtn';
import { Auth } from '../util/Auth';

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
        <TextInput
          name="email"
          style={styled.inputBox}
          placeholder="이메일을 입력하세요"
          onChange={e => authChange('userId', e.nativeEvent)}
        />
        <TextInput
          name="password"
          style={styled.inputBox}
          placeholder="비밀번호를 입력하세요"
          secureTextEntry={true}
          onChange={e => authChange('userPw', e.nativeEvent)}
        />
        <TextInput
          name="eqPassword"
          style={styled.inputBox}
          placeholder="비밀번호를 한번 더 입력하세요"
          secureTextEntry={true}
          onChange={e => authChange('eqPassword', e.nativeEvent)}
        />
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
          <Text>{msg}</Text>
        </View>
      </View>
      <View style={styled.btnBox}>
        <PublicBtn title="회원가입" onPress={() => {
          const result = Auth(authCheck.userId, authCheck.userPw, authCheck.eqPassword)
          if(result != null) setMsg(result)
          else if(result == null) return navigation.navigate('WelcomeScreen')
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
      paddingTop : 20,
      marginBottom : 50
  },
  inputBox: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  btnBox: {
    flex: 1,
    marginTop: 10,
    width: '100%'
  },
  phoneNumber: {
    flexDirection: 'row',
    marginTop: 15
  },
  numberBox:{
    width: 85,
    height: 40,
    borderBottomWidth: 1,
    marginTop: 15,
    textAlign: 'center'
  },
  center:{
    alignSelf: 'center',
  }
});
