import {Button, View, StyleSheet, Text, Pressable, TouchableOpacity} from "react-native";

function SocialMediaButton({onPress, text, bgColor,fgColor}) {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor:bgColor}]} onPress={onPress} >
            <Text style={[styles.text,  {color:fgColor}]}>{text}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding:15,
        marginVertical:10,
        alignItems:'center',
        borderRadius:10
    },
   text:{
        fontSize:16,
        fontWeight:'normal'
   }

})
export default SocialMediaButton;