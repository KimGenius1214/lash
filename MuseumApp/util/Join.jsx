import axios from 'axios';

export default async function Join(authCheck){

    const { userId, name } = authCheck;

    const data = {
        idx : "1112",
        userId : userId,
        name : name
    }

    try {
        await axios.post('http://192.168.35.200:8080/user/', data ,{    //본인 IP 주소 넣으십쇼
            header: {
                'Content-Type':'application/json'
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    } catch(error){
        console.log(error.response);
    }
}