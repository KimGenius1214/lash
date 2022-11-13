import axios from 'axios';
import { v4 } from 'uuid';

export default async function Join(authCheck){

    const { userId, userPw, name, phone } = authCheck;

    const uuid = v4();
    const temp = uuid.split('-');
    const userIdx = temp[0] + temp[3] + temp[2] + temp[4] + temp[1];    

    const data = {
        idx : userIdx,
        userId : userId,
        userPw : userPw,
        name : name,
        hp : phone
    }

    try {
        const isJoin = await axios.post('http://61.72.60.239:8080/user/', data ,{    //본인 IP 주소 넣으십쇼
            header: {
                'Content-Type':'application/json'
            }
        })
        .catch(function (error) {!
            console.log(error);
        });

        if(isJoin.status === 204) return 204;
        else return '가입 실패';
    } catch(error){
        console.log(error.response);
    }
}