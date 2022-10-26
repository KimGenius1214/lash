import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, StyleSheet } from 'react-native';
import PublicBtn from '../util/PublicBtn';
import { Auth } from '../util/Auth';
import Join from '../util/Join';

export default function JoinForm({navigation}) {
  const [authCheck, setAuthCheck] = useState({
    name: '',
    userId : '',
    userPw : '',
    eqPassword : '',
    phone: '',
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
      <Text style={styled.textBox}>이름</Text>
        <TextInput
          name="name"
          style={styled.inputBox}
          placeholder="이름을 입력하세요"
          onChange={e => authChange('name', e.nativeEvent)}
        />
        {
          msg === 0 &&
          <Text style={styled.redBox}>이름을 입력하세요.</Text>
        }
        <Text style={styled.textBox}>아이디(이메일)</Text>
        <TextInput
          name="email"
          style={styled.inputBox}
          placeholder="이메일을 입력하세요"
          onChange={e => authChange('userId', e.nativeEvent)}
        />
        {
          msg === 1 &&
          <Text style={styled.redBox}>이메일을 입력하세요.</Text>
        }
        {
          msg === 2 &&
          <Text style={styled.redBox}>이메일을 확인하세요.</Text>
        }
        <Text style={styled.textBox}>비밀번호</Text>
        <TextInput
          name="password"
          style={styled.inputBox}
          placeholder="영문/숫자/특수문자를 포함한 8자리 이상"
          secureTextEntry={true}
          onChange={e => authChange('userPw', e.nativeEvent)}
        />
        {
          msg === 3 &&
          <Text style={styled.redBox}>비밀번호를 입력하세요.</Text>
        }
        {
          msg === 5 &&
          <Text style={styled.redBox}>비밀번호 형식을 확인하세요.</Text>
        }
        <Text style={styled.textBox}>비밀번호 확인</Text>
        <TextInput
          name="eqPassword"
          style={styled.inputBox}
          placeholder="비밀번호를 한번 더 입력하세요"
          secureTextEntry={true}
          onChange={e => authChange('eqPassword', e.nativeEvent)}
        />
        {
          msg === 4 &&
          <Text style={styled.redBox}>비밀번호가 일치하지 않습니다.</Text>
        }
        <Text style={styled.textBox}>휴대폰 번호</Text>
        <View
        style={styled.phoneNumber}
        >
          <TextInput 
          name="phone"
          style={styled.numberBox}
          placeholder="'-' 구분없이 입력"
          onChange={e => authChange('phone', e.nativeEvent)}
          />
          <PublicBtn title='인증하기' onPress={() => console.log('인증하기')}
          />
        </View>
          {
              msg === 6 &&
              <Text style={styled.redBox}>휴대폰 번호를 입력하세요.</Text>
          }
      </View>
      <View style={styled.btnBox}>
        <PublicBtn title="회원가입" onPress={() => {
          const result = Auth({authCheck})
          if(result != null) setMsg(result)
          else if(result == null) Join({authCheck})
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
    width: '60%',
    height: 40,
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  center: {
    alignSelf: 'center',
  },
  textBox: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  redBox:{
    color: 'red',
    fontSize: 10
  }
});
