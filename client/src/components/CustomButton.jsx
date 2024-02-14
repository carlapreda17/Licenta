import {Button, View, StyleSheet, Text, Pressable, TouchableOpacity} from "react-native";

function CustomButton({onPress, text, type='primary'}) {
    const styles=require('../../styles')
    return (
        <TouchableOpacity style={[styles.btn_container, styles[`container_${type}`]]} onPress={onPress}>
            <Text style={[styles[`text_btn_${type}`]]}>{text}</Text>
        </TouchableOpacity>

    )
}

export default CustomButton;