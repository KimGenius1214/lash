import axios from 'axios';

export default async function Login(authCheck){
    // const localhost = await axios.get('https://api.ipify.org/?format=json').then(res => res.data).then(data => data.ip)

    const localhost = `192.168.35.200`;
    const { userId, userPw } = authCheck;

    const data = { userId: userId, userPw: userPw }

    try {
        console.log("여기", localhost)
        const res = await axios.post(`http://${localhost}:8083/v1/api/auth/sign-in`, data,{ 
            header: {
                'Content-Type':'application/json'
            }
        }).catch(function (error) {
            console.log(error);
        });

        console.log("여기", res)

        // if(res.status === 200){
        //     return res.data
        // }else{
        //     return '로그인 실패'
        // }

    } catch(error){
        console.log(error);
    }
}