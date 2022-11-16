import axios from 'axios';
import LoginAuthContext from '../component/ContextAPI';

export default async function Login(authCheck){
    const { userId, userPw } = authCheck;

    const data = { userId: userId, userPw: userPw }

    try {
        const res = await axios.post('http://221.155.110.178:8080/user/login', data,{ 
            header: {
                'Content-Type':'application/json'
            }
        }).catch(function (error) {
            console.log(error);
        });

        if(res.status === 200){
            return res.data
        }else{
            return '로그인 실패'
        }

    } catch(error){
        console.log(error);
    }
}