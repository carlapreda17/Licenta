import {Button, View, StyleSheet, Text, Pressable, TouchableOpacity} from "react-native";

function CustomButton({onPress, text, type='primary'}) {
    return (
        <TouchableOpacity style={[styles.container, styles[`container_${type}`]]} onPress={onPress}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        borderRadius:10
    },
    container_primary: {
        backgroundColor:'#FFD369',
        padding:15,
        marginVertical:10,
        width:'100%',
    },
    container_link: {
        padding:10,
        marginVertical:10,
        width:'100%',
    },
    container_small_link: {
        marginVertical:3,
        padding:5,

    },
    text:{
        color:'#EEEEEE'
    },
    text_primary:{
        color:'#222831',
        fontWeight:'bold',
        fontSize:18
    },
    text_link: {
        fontSize:14,
        fontWeight:'normal'
    },
    text_small_link: {
        fontSize:12,
        fontWeight:'normal',
        textDecorationLine:'underline'

    }

})
export default CustomButton;