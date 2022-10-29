import axios from 'axios';

export default async function Login(authCheck){
    const { userId, userPw } = authCheck;

    const data = {userId : userId, userPw : userPw}

    try {
        const res = await axios.post('http://192.168.35.200:8080/user/login', data,{ 
            header: {
                'Content-Type':'application/json'
            }
        }).catch(function (error) {
            console.log(error);
        });

        if(res.data == 'OK'){
            return '로그인 성공'
        }else{
            return '로그인 실패'
        }

    } catch(error){
        console.log(error);
    }
}