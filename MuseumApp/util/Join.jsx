import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'

export default function Join({navigation, authCheck}){

    const { userId, userPw, phone, name } = authCheck;

    const uuid = () => {
        const temp = uuidv4().split('-')
        return temp[0] + temp[3] + temp[2] + temp[4] + temp[1];
    }

    const result = async () =>
        await axios.post(`/v1/api/user/${userId}`,{
            userIdx : uuid,
            userId : userId,
            userPw : userPw,
            name : name,
            userPhone : phone
        }).catch(function(err) {
            return err
        }) 
        
        if(result == 200) navigation.navigate('WelcomeScreen')
}