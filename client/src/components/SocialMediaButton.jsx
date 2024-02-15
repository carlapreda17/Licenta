import {Button, View, StyleSheet, Text, Pressable, TouchableOpacity} from "react-native";
import s from "../../styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function SocialMediaButton({onPress, text, bgColor,fgColor,type}) {
    const styles=require('../../styles')
    const iconSize = type === 'google' ? 35 : 40;
    return (
        <TouchableOpacity style={[styles.social_media_btn_container,styles.btn_container, {backgroundColor:bgColor}]} onPress={onPress} >
            <MaterialCommunityIcons name={type} size={iconSize} color={fgColor} style={s.social_icons}></MaterialCommunityIcons>
            <Text style={[styles.social_media_btn_text, {color:fgColor}]}>{text}</Text>
        </TouchableOpacity>

    )
}

export default SocialMediaButton;