import axios from 'axios';

export default async function Login(authCheck){
    const { userId, userPw } = authCheck;

    const data = { userId : userId, userPw : userPw }

    try {
        const res = await axios.post('http://61.72.60.239:8080/user/login', data,{ 
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