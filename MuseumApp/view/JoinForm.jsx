import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import PublicBtn from '../util/PublicBtn';
import {Auth} from '../util/Auth';

export default function JoinForm() {
  const [authCheck, setAuthCheck] = useState({
    userId : '',
    userPw : '',
    eqPassword : ''
  });
  const [msg, setMsg] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const authChange = (key, e) => {
    const value = e.text;
    setAuthCheck({
      ...authCheck,
      [key] : value
    })
  };

  return (
    <View style={styled.container}>
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
        onChange={e => authChange('userPw', e.nativeEvent)}
      />
      <TextInput
        name="eqPassword"
        style={styled.inputBox}
        placeholder="비밀번호를 한번 더 입력하세요"
        onChange={e => authChange('eqPassword', e.nativeEvent)}
      />
      <Text>{msg}</Text>
      <View style={styled.btnBox}>
        <PublicBtn title="회원가입" onPress={() => {
          const result = Auth(authCheck.userId, authCheck.userPw, authCheck.eqPassword)
          if(result != null) setMsg(result)
          else if(result == null) console.log('축하축하')

          }} />
      </View>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
  },
  inputBox: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  btnBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%'
  },
});
