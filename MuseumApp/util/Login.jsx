import axios from 'axios';

export default async function Login(authCheck){
    // const localhost = await axios.get('https://api.ipify.org/?format=json').then(res => res.data).then(data => data.ip)
    // const localhost = `192.168.35.200`;
    const localhost = `192.168.50.66`;
    const { userId, userPw } = authCheck;

    const data = { userId: userId, userPw: userPw }

    try {
        const res = await axios.post(`http://${localhost}:8083/v1/api/auth/sign-in`, data,{ 
            header: {
                'Content-Type':'application/json'
            }
        }).catch(function (error) {
            console.log(error);
        });
        const { accessToken } = res.data;

        if(accessToken != null && accessToken != ""){
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

            const ress = await axios.post(
                `http://${localhost}:8083/users/info`, {userId: data.userId},{ 
                    header: {
                        'Content-Type':'application/json'
                    }
                }).catch(function (error) {
                    console.log(error);
                });

            if(ress.data){
                return ress.data
            }else{
                return null;
            }
        }else{
            return null;
        }

    } catch(error){
        console.log(error);
    }
}