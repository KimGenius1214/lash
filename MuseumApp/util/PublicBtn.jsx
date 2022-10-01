import { TouchableOpacity, Text, StyleSheet } from "react-native";

/**
 * @onPress 이벤트를 호출한다
 * @title '승인', '취소'
 */
export default function PublicBtn({ onPress, title }) {
    return(
        <TouchableOpacity onPress={onPress} style={styles.appButton}>
            <Text style={color[title]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appButton: {
        fontSize: 10,
        width: '100%'
    },
    btnOk: {
        textAlign: 'center',
        backgroundColor : "#474fe0",
        borderRadius : 10,
        color: "#fff",
        width: "100%",
        height: 50,
        textAlignVertical: 'center'
    },
    btnNo:{
        textAlign: 'center',
        color: "#fff",
        backgroundColor : "red",
        borderRadius : 10,
        width: 150,
        height: 30,
        textAlignVertical: 'center'
    },
    loginBtn: {
        marginTop : 10,
        width: '100%',
        height: 50,
        textAlign: 'center',
        backgroundColor: "#474fe0",
        borderRadius: 5,
        fontSize: 20,
        color: '#fff',
        alignSelf: 'center',
        textAlignVertical: 'center'
    }
})

const color = {
    회원가입 : styles.btnOk,
    취소 : styles.btnNo,
    입력 : styles.btnOk,
    초기화 : styles.btnNo
}