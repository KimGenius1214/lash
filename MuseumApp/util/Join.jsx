import axios from 'axios';

export default function Join({navigation, authId, authPw, name, phone}){

    let userId = authId;
    let userPw = authPw;
    let userName = name;
    let userPhone = phone;

    const result = async () =>
        await axios.post(`/v1/api/user/${userId}`,{
            userId : userId,
            userPw : userPw,
            userName : userName,
            userPhone : userPhone
        }).catch(function(err) {
            return err
        }) 

        console.log(result)
        
        if(result == 200) navigation.navigate('WelcomeScreen')
}