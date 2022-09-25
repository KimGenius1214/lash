/**
 * @keyvalue "키 명칭" 
 * @value "키 벨류"
 */

export default function Auth(key, value){
    if(key === 'email'){
        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        if(!regExp.test(value)) return false
        else return true
    }
    // 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
    else if(key === 'password'){
        const regExp = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
        if(!regExp.test(value)) return false
        else return true
    }
}