import React from "react";
import { View, TextInput } from "react-native";
import PublicBtn from '../util/PublicBtn';

export default function JoinForm(){
    const addMember = () => {

    }

    return(
        <View>
            <PublicBtn title='추가' onPress={addMember} />
        </View>
    )
}