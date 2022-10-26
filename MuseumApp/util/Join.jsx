import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'

export default function Join({navigation, authCheck}){

    const { userId, userPw, phone, name } = authCheck;

    const uuid = () => {
        const temp = uuidv4().split('-')
        return temp[0] + temp[3] + temp[2] + temp[4] + temp[1];
    }

    const result = async () =>
        await axios.post(`http://localhost:8080/user/`, JSON.stringify({
            idx : uuid,
            userId : userId,
            // userPw : userPw,
            name : name,
            // hp : phone
        }),
        {
            headers: {
                "Content-Type" : `application/json`
            }
        })
        .then((res) => console.log(res))
        .catch(function(err) {
            return err
        })
}