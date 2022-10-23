import axios from 'axios';

export default function Join({navigation, authId, authPw}){

    let userId = authId;
    let userPw = authPw;

    const result = async () =>
        await axios.post(`/v1/api/user/${userId}`,{
            userId : userId,
            userPw : userPw
        }).catch(function(err) {
            return err
        }) 

        console.log(result)
        
        if(result == 200) navigation.navigate('WelcomeScreen')
}